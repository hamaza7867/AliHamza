
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // --- Objects ---
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.1
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner glowing core
    const coreGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.6 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Lights
    const pLight = new THREE.PointLight(0x22d3ee, 50);
    pLight.position.set(2, 2, 2);
    scene.add(pLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // --- Interaction ---
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x: targetX, y: targetY });
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.002;
      
      // Follow mouse smoothly
      sphere.position.x += (targetX - sphere.position.x) * 0.05;
      sphere.position.y += (-targetY - sphere.position.y) * 0.05;
      
      core.scale.set(
        1 + Math.sin(Date.now() * 0.005) * 0.1,
        1 + Math.sin(Date.now() * 0.005) * 0.1,
        1 + Math.sin(Date.now() * 0.005) * 0.1
      );

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 page-fade-in" style={{
        transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`
      }}>
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full border border-white/10">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">System: Operational // Ali Hamza Node</span>
        </div>

        <h1 className="text-7xl md:text-[10rem] font-black syncopate leading-none tracking-tighter mb-4 select-none">
          <span className="block text-white">ALI</span>
          <span className="block gradient-text">HAMZA</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-light tracking-wide mb-12">
          Specialist in <span className="text-white">AI Automation</span> & <span className="text-white">Full-Stack Architectures</span>. Building scalable ecosystems at X2technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/projects" className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan-400 hover:scale-105 transition-all">
            Browse Archive
          </Link>
          <Link to="/connect" className="px-10 py-4 glass text-white font-bold uppercase tracking-widest text-xs rounded-full hover:border-white transition-all">
            Secure Sync
          </Link>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="text-[10px] font-mono text-white/20 rotate-90 origin-left uppercase tracking-[0.5em]">
          Scroll_to_explore_data
        </div>
      </div>
    </section>
  );
};

export default Hero;
