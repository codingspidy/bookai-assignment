"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeSnowflakes = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = canvasRef.current;

      // Set up scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Create snowflake particles
      const snowflakeGeometry = new THREE.BufferGeometry();
      const snowflakeCount = 2000;
      const positions = new Float32Array(snowflakeCount * 3);

      for (let i = 0; i < snowflakeCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100; // X position
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y position
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z position
      }

      snowflakeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const snowflakeMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        sizeAttenuation: true,
      });

      const snowflakes = new THREE.Points(snowflakeGeometry, snowflakeMaterial);
      scene.add(snowflakes);

      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Snowflake movement
        snowflakes.rotation.y += 0.0005;
        snowflakes.rotation.x += 0.0005;

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', onWindowResize);

      // Clean up on component unmount
      return () => {
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
      };
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

export default ThreeSnowflakes;
