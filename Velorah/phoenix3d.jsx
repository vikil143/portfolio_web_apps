/* global React */
/*
  Phoenix3D — Three.js stage with:
   - scroll-synced rotation + camera zoom
   - mouse parallax tilt
   - idle float / breathe
   - flap trigger on demand (window event 'phoenix:flap')
   - target-look trigger (window event 'phoenix:look' with detail {dx})
   - plays GLB AnimationClip[0] if present, blended with manual transforms
*/

window.Phoenix3D = function Phoenix3D({ stageId = "phoenix-stage", scrollTargetId = "about" }) {
  const hostRef = React.useRef(null);
  const stateRef = React.useRef({
    ready: false,
    THREE: null,
    renderer: null,
    scene: null,
    camera: null,
    model: null,
    mixer: null,
    clock: null,
    rafId: 0,
    scrollProg: 0,
    mouseX: 0, mouseY: 0,
    tiltX: 0, tiltY: 0,
    spinExtra: 0, spinVel: 0,
    flapBoost: 0,
    lookX: 0, lookY: 0,
    loaded: false,
  });
  const [loaded, setLoaded] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;

    const boot = async () => {
      if (!window.__three) {
        await new Promise(res => window.addEventListener('three-ready', res, { once: true }));
      }
      if (cancelled) return;
      const { THREE, GLTFLoader } = window.__three;
      const s = stateRef.current;
      s.THREE = THREE;

      const host = hostRef.current;
      if (!host) return;
      const w = host.clientWidth;
      const h = host.clientHeight;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      host.appendChild(renderer.domElement);
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";

      const scene = new THREE.Scene();
      // navy fog blend
      scene.fog = new THREE.FogExp2(0x021a26, 0.05);

      const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
      camera.position.set(0, 0.4, 4.6);

      // Lighting — cinematic 3-point rig with cool/warm contrast
      const key = new THREE.DirectionalLight(0xffe1b3, 2.2);
      key.position.set(3, 4, 3);
      scene.add(key);

      const fill = new THREE.DirectionalLight(0x4ea8ff, 1.4);
      fill.position.set(-4, 1.5, -2);
      scene.add(fill);

      const rim = new THREE.DirectionalLight(0xff7755, 1.8);
      rim.position.set(0.6, -1.2, -3);
      scene.add(rim);

      const ambient = new THREE.AmbientLight(0x335577, 0.35);
      scene.add(ambient);

      // ground glow disc
      const groundGeo = new THREE.CircleGeometry(2.4, 64);
      const groundMat = new THREE.MeshBasicMaterial({
        color: 0x4ea8ff, transparent: true, opacity: 0.08, side: THREE.DoubleSide,
      });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -1.4;
      scene.add(ground);

      // particle dust
      const dustCount = 240;
      const dustPos = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPos[i*3+0] = (Math.random() - 0.5) * 6;
        dustPos[i*3+1] = (Math.random() - 0.5) * 4;
        dustPos[i*3+2] = (Math.random() - 0.5) * 4 - 1;
      }
      const dustGeo = new THREE.BufferGeometry();
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
      const dustMat = new THREE.PointsMaterial({
        color: 0xffd6a6, size: 0.018, transparent: true, opacity: 0.6, depthWrite: false
      });
      const dust = new THREE.Points(dustGeo, dustMat);
      scene.add(dust);

      const clock = new THREE.Clock();

      s.renderer = renderer;
      s.scene = scene;
      s.camera = camera;
      s.clock = clock;
      s.dust = dust;

      // Load model
      const loader = new GLTFLoader();
      loader.load('phoenix.glb', (gltf) => {
        if (cancelled) return;
        const model = gltf.scene;

        // Normalize size + center
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const targetSize = 2.2;
        const scale = targetSize / maxDim;
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        // Enhance materials
        model.traverse(o => {
          if (o.isMesh) {
            o.castShadow = false;
            o.receiveShadow = false;
            if (o.material) {
              const m = o.material;
              if (m.color) m.color.convertSRGBToLinear?.();
              if ('roughness' in m) m.roughness = Math.min(0.8, m.roughness ?? 0.6);
              if ('metalness' in m) m.metalness = Math.max(0.05, m.metalness ?? 0.1);
              if ('emissive' in m && m.emissive) {
                m.emissiveIntensity = Math.max(m.emissiveIntensity ?? 0, 0.6);
              }
              m.envMapIntensity = 1.2;
            }
          }
        });

        scene.add(model);
        s.model = model;

        if (gltf.animations && gltf.animations.length) {
          const mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip);
            action.play();
          });
          s.mixer = mixer;
        }
        s.loaded = true;
        setLoaded(true);
      }, (xhr) => {
        if (xhr.total) setProgress(Math.round(xhr.loaded / xhr.total * 100));
      }, (err) => {
        console.error('Phoenix load failed', err);
      });

      // Resize
      const onResize = () => {
        if (!hostRef.current) return;
        const W = hostRef.current.clientWidth;
        const H = hostRef.current.clientHeight;
        renderer.setSize(W, H);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      // Scroll sync — progress through the scrollTargetId section
      const scrollTarget = document.getElementById(scrollTargetId);
      const onScroll = () => {
        if (!scrollTarget) return;
        const rect = scrollTarget.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh;
        const traveled = vh - rect.top;
        const p = Math.max(0, Math.min(1, traveled / total));
        s.scrollProg = p;
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      // Mouse parallax (uses host bounds)
      const onMove = (e) => {
        const r = host.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        s.mouseX = (e.clientX - cx) / (window.innerWidth / 2);
        s.mouseY = (e.clientY - cy) / (window.innerHeight / 2);
      };
      window.addEventListener('mousemove', onMove);

      // External triggers
      const onFlap = () => { s.flapBoost = 1; s.spinVel += 6; };
      const onLook = (e) => {
        const dx = e.detail?.dx ?? 0;
        s.lookX = Math.max(-1, Math.min(1, dx));
      };
      const onSpin = () => { s.spinVel += 12; };
      window.addEventListener('phoenix:flap', onFlap);
      window.addEventListener('phoenix:look', onLook);
      window.addEventListener('phoenix:spin', onSpin);

      // Click stage → spin
      host.addEventListener('click', onSpin);

      // Animate
      const animate = () => {
        const dt = clock.getDelta();
        const t = clock.elapsedTime;
        const p = s.scrollProg;

        // ease mouse
        s.tiltX += (s.mouseX - s.tiltX) * 0.06;
        s.tiltY += (s.mouseY - s.tiltY) * 0.06;
        // ease lookX back to 0
        s.lookX *= 0.94;
        s.flapBoost *= 0.92;

        // spin velocity decays
        s.spinExtra += s.spinVel * dt;
        s.spinVel *= 0.93;

        if (s.model) {
          // Base rotation: scroll-synced 1.2 revolutions + idle slow rotate + spin trigger
          const scrollRot = p * Math.PI * 2.2;
          const idleRot = t * 0.25;
          s.model.rotation.y = scrollRot + idleRot + s.spinExtra + s.tiltX * 0.5 + s.lookX * 0.6;
          // gentle tilt from mouse Y
          s.model.rotation.x = Math.sin(t * 1.1) * 0.06 + s.tiltY * 0.25 + s.flapBoost * 0.25;
          s.model.rotation.z = Math.cos(t * 0.7) * 0.04 + s.tiltX * 0.15;
          // float
          s.model.position.y = Math.sin(t * 1.4) * 0.07 + s.flapBoost * 0.4;
          // scroll-driven scale pulse (subtle)
          const sc = 1 + Math.sin(t * 2) * 0.01 + s.flapBoost * 0.05;
          s.model.scale.setScalar(s.model.userData.baseScale ? s.model.userData.baseScale * sc : sc);
          if (!s.model.userData.baseScale) s.model.userData.baseScale = s.model.scale.x / sc;
        }

        // Camera dolly: scroll pulls it closer slightly
        const targetZ = 4.6 - p * 0.6;
        camera.position.z += (targetZ - camera.position.z) * 0.05;
        // camera offset by mouse
        camera.position.x += ((s.tiltX * 0.4) - camera.position.x) * 0.05;
        camera.position.y += ((0.4 + s.tiltY * -0.2) - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);

        // dust drift
        if (s.dust) {
          s.dust.rotation.y = t * 0.04;
          s.dust.position.y = Math.sin(t * 0.3) * 0.2;
        }

        // rim light cycle for life
        rim.intensity = 1.5 + Math.sin(t * 0.8) * 0.3 + s.flapBoost * 1.2;
        key.intensity = 2.0 + s.flapBoost * 1.0;

        if (s.mixer) s.mixer.update(dt);

        renderer.render(scene, camera);
        s.rafId = requestAnimationFrame(animate);
      };
      animate();

      s.cleanup = () => {
        cancelAnimationFrame(s.rafId);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('phoenix:flap', onFlap);
        window.removeEventListener('phoenix:look', onLook);
        window.removeEventListener('phoenix:spin', onSpin);
        host.removeEventListener('click', onSpin);
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    };

    boot();
    return () => {
      cancelled = true;
      if (stateRef.current.cleanup) stateRef.current.cleanup();
    };
  }, [scrollTargetId]);

  return (
    <div
      ref={hostRef}
      id={stageId}
      style={{
        position: "absolute", inset: 0,
        cursor: "grab",
      }}
    >
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "hsla(0,0%,100%,.55)",
          pointerEvents: "none",
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: "#6ce0a8",
              animation: "scan-pulse 1.2s ease-in-out infinite",
            }} />
            Summoning phoenix · {progress}%
          </span>
        </div>
      )}
    </div>
  );
};
