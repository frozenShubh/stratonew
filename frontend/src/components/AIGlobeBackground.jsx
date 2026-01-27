import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AIGlobeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create AI Globe with wireframe
    const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x539AC1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Add glowing inner sphere
    const innerGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(4.8, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x0D4669,
        transparent: true,
        opacity: 0.2,
      })
    );
    scene.add(innerGlobe);

    // Add AI neural network connections
    const connections = [];
    const connectionCount = 200;
    
    for (let i = 0; i < connectionCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / connectionCount);
      const theta = Math.sqrt(connectionCount * Math.PI) * phi;

      const x = 5.2 * Math.cos(theta) * Math.sin(phi);
      const y = 5.2 * Math.sin(theta) * Math.sin(phi);
      const z = 5.2 * Math.cos(phi);

      // Create connection point
      const pointGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const pointMaterial = new THREE.MeshBasicMaterial({
        color: 0xA5C7E0,
        transparent: true,
        opacity: 0.8,
      });
      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      point.position.set(x, y, z);
      scene.add(point);
      connections.push(point);

      // Occasionally add connecting lines
      if (i % 10 === 0 && connections.length > 10) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          connections[connections.length - 10].position,
          point.position,
        ]);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x235D94,
          transparent: true,
          opacity: 0.3,
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }
    }

    // Add orbital rings
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(6 + i * 0.5, 0.02, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x539AC1,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      rings.push(ring);
      scene.add(ring);
    }

    // Particle field
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Blue color palette
      colors[i * 3] = 0.2 + Math.random() * 0.3;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.005;

      // Rotate globe
      globe.rotation.y = time * 0.3;
      globe.rotation.x = Math.sin(time * 0.2) * 0.1;
      innerGlobe.rotation.y = -time * 0.2;

      // Animate rings
      rings.forEach((ring, index) => {
        ring.rotation.x += 0.001 * (index + 1);
        ring.rotation.y += 0.002 * (index + 1);
      });

      // Rotate particle system
      particleSystem.rotation.y = time * 0.1;

      // Pulse connections
      connections.forEach((point, index) => {
        const scale = 1 + Math.sin(time * 2 + index * 0.1) * 0.3;
        point.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
      }}
    />
  );
};