import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as THREE from "three";

const frames = [
  {
    tag: "Chapter 01",
    title: ["The Terrain", "Awakens"],
    body: "A nation of perimeters, blind spots and unseen risk. We chart it. We claim it.",
  },
  {
    tag: "Chapter 02",
    title: ["Intelligence", "Over Force"],
    body: "TRAC — our smart guard tracking platform — turns every officer into a sensor in a living grid.",
  },
  {
    tag: "Chapter 03",
    title: ["A Shield That", "Thinks"],
    body: "4200+ trained personnel, 12 states, 800+ sites. One unified doctrine of protection.",
  },
  {
    tag: "Chapter 04",
    title: ["Your Terrain,", "Held."],
    body: "From corporate HQs to hospitals, IT campuses to retail — we hold the line so you can grow.",
  },
];

export function ThreeScrollScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ progress: 0 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  // Three.js setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 6;

    // Core: an icosahedron wireframe "globe / shield"
    const geo = new THREE.IcosahedronGeometry(1.6, 2);
    const mat = new THREE.MeshBasicMaterial({ color: 0xb6f04a, wireframe: true, transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Inner solid glow
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x1a2f10, transparent: true, opacity: 0.55 });
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.55, 2), innerMat);
    scene.add(inner);

    // Particle field
    const pCount = 1400;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 3 + Math.random() * 5;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(p) * Math.cos(t);
      positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      positions[i * 3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x86d0ff, size: 0.025, transparent: true, opacity: 0.7 });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Outer ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.012, 16, 200),
      new THREE.MeshBasicMaterial({ color: 0xb6f04a, transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.1, 0.008, 16, 200),
      new THREE.MeshBasicMaterial({ color: 0x86d0ff, transparent: true, opacity: 0.35 })
    );
    ring2.rotation.x = Math.PI / 3;
    scene.add(ring2);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    onResize();
    window.addEventListener("resize", onResize);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const p = stateRef.current.progress;
      // Drive transforms from scroll progress
      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.0012;
      inner.rotation.copy(mesh.rotation);

      const scale = 0.6 + p * 1.6;
      mesh.scale.setScalar(scale);
      inner.scale.setScalar(scale * 0.98);

      ring.rotation.z += 0.003;
      ring2.rotation.z -= 0.002;
      ring.scale.setScalar(0.7 + p * 1.4);
      ring2.scale.setScalar(0.6 + p * 1.6);

      points.rotation.y += 0.0006;
      points.rotation.x = p * Math.PI * 0.4;

      // Color shift across chapters
      const hueA = new THREE.Color(0xb6f04a);
      const hueB = new THREE.Color(0x86d0ff);
      const hueC = new THREE.Color(0xffffff);
      const c = new THREE.Color().lerpColors(hueA, hueB, Math.min(1, p * 1.6));
      if (p > 0.7) c.lerp(hueC, (p - 0.7) / 0.3);
      mat.color.copy(c);

      camera.position.z = 6 - p * 1.4;
      renderer.render(scene, camera);
    };
    tick();

    const unsub = smooth.on("change", (v) => {
      stateRef.current.progress = v;
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      unsub();
      geo.dispose();
      mat.dispose();
      inner.geometry.dispose();
      innerMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
      ring2.geometry.dispose();
      (ring2.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, [smooth]);

  // Background color transitions across the section
  const bgColor = useTransform(
    smooth,
    [0, 0.33, 0.66, 1],
    ["oklch(0.10 0.01 160)", "oklch(0.14 0.02 160)", "oklch(0.18 0.04 220)", "oklch(0.10 0.01 160)"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative h-[500vh]"
      aria-label="Terrain Force scroll narrative"
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Three canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Vignette + grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />

        {/* Frames */}
        <div className="absolute inset-0 grid place-items-center">
          {frames.map((f, i) => (
            <Frame key={i} frame={f} index={i} total={frames.length} progress={smooth} />
          ))}
        </div>

        {/* Chapter indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-10">
          {frames.map((_, i) => (
            <ChapterTick key={i} index={i} total={frames.length} progress={smooth} />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[4px] uppercase text-muted-foreground flex items-center gap-3">
          <span className="w-8 h-px bg-brand" /> Scroll <span className="w-8 h-px bg-brand" />
        </div>
      </div>
    </motion.section>
  );
}
