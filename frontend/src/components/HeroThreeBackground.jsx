import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroThreeBackground = () => {
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
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create larger, more visible geometric shapes
    const shapes = [];
    const shapeCount = 12;

    // Add various geometric shapes with better visibility
    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      const shapeType = i % 4;
      
      if (shapeType === 0) {
        geometry = new THREE.BoxGeometry(3, 3, 3);
      } else if (shapeType === 1) {
        geometry = new THREE.OctahedronGeometry(2.5);
      } else if (shapeType === 2) {
        geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
      } else {
        geometry = new THREE.IcosahedronGeometry(2);
      }

      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x539AC1 : 0xA5C7E0,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Better positioning spread
      mesh.position.x = (Math.random() - 0.5) * 40;
      mesh.position.y = (Math.random() - 0.5) * 25;
      mesh.position.z = (Math.random() - 0.5) * 30 - 10;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015,
        },
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Create more visible connecting lines
    const lineCount = 40;
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 40
        )
      );
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 40
        )
      );

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x539AC1,
        transparent: true,
        opacity: 0.3,
      });

      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      lines.push(line);
    }

    // Enhanced particle system
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      // Blue color variations
      colors[i * 3] = 0.3 + Math.random() * 0.3;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add glowing spheres
    const glowSpheres = [];
    for (let i = 0; i < 5; i++) {
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xA5C7E0,
        transparent: true,
        opacity: 0.8,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.x = (Math.random() - 0.5) * 40;
      sphere.position.y = (Math.random() - 0.5) * 20;
      sphere.position.z = (Math.random() - 0.5) * 30;
      scene.add(sphere);
      glowSpheres.push({
        mesh: sphere,
        speed: Math.random() * 0.001 + 0.0005,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Animate shapes with more visible movement
      shapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;
        
        // More pronounced floating motion
        shape.mesh.position.y += Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.03;
        shape.mesh.position.x += Math.cos(time * shape.floatSpeed + shape.floatOffset) * 0.02;
      });

      // Animate glowing spheres
      glowSpheres.forEach((sphere) => {
        sphere.mesh.position.y += Math.sin(time * sphere.speed + sphere.offset) * 0.05;
        sphere.mesh.position.x += Math.cos(time * sphere.speed + sphere.offset) * 0.03;
        
        // Pulse effect
        const scale = 1 + Math.sin(time * 2 + sphere.offset) * 0.3;
        sphere.mesh.scale.set(scale, scale, scale);
      });

      // Rotate particle system
      particleSystem.rotation.y = time * 0.08;
      particleSystem.rotation.x = time * 0.05;

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
        opacity: 0.7,
      }}
    />
  );
};