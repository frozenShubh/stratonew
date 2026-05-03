import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroThreeBackground = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Skip WebGL rendering if we are pre-rendering with react-snap
    if (navigator.userAgent.includes('ReactSnap')) {
      return;
    }

    try {
      const container = containerRef.current; // Store ref value for cleanup

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear existing canvas if any
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(renderer.domElement);

    // Create animated shapes
    const shapes = [];
    const shapeCount = 10;

    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      const shapeType = i % 4;
      
      if (shapeType === 0) {
        geometry = new THREE.BoxGeometry(4, 4, 4);
      } else if (shapeType === 1) {
        geometry = new THREE.OctahedronGeometry(3);
      } else if (shapeType === 2) {
        geometry = new THREE.TorusGeometry(2.5, 0.7, 16, 100);
      } else {
        geometry = new THREE.IcosahedronGeometry(2.5);
      }

      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x539AC1 : 0xA5C7E0,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 40;
      mesh.position.y = (Math.random() - 0.5) * 25;
      mesh.position.z = (Math.random() - 0.5) * 30 - 10;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.003 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Create connecting lines
    const lineCount = 50;
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
        opacity: 0.4,
      });

      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }

    // Particle system
    const particleCount = 1500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      colors[i * 3] = 0.3 + Math.random() * 0.3;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);



    // Mouse interaction variables
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Add mouse event listener to document (global mouse tracking)
    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    let isAnimating = true;

    const animate = () => {
      if (!isAnimating) return;

      time += 0.01;

      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      // Animate shapes with mouse influence
      shapes.forEach((shape, index) => {
        // Base rotation
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;

        // Calculate mouse influence
        const mouseDistance = Math.sqrt(
          Math.pow(shape.mesh.position.x - mouse.x * 20, 2) +
          Math.pow(shape.mesh.position.y - mouse.y * 15, 2)
        );

        // Mouse repulsion effect - shapes move away when mouse is close
        const repulsionStrength = Math.max(0, 1 - mouseDistance / 25) * 0.01;
        const repulsionX = (shape.mesh.position.x - mouse.x * 20) * repulsionStrength;
        const repulsionY = (shape.mesh.position.y - mouse.y * 15) * repulsionStrength;

        // Base floating animation
        const baseX = Math.cos(time * shape.floatSpeed + shape.floatOffset) * 0.03;
        const baseY = Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.04;

        // Combine floating with mouse repulsion
        shape.mesh.position.x += baseX + repulsionX;
        shape.mesh.position.y += baseY + repulsionY;

        // Increase rotation speed when mouse is close
        if (repulsionStrength > 0) {
          shape.mesh.rotation.x += repulsionStrength * 0.1;
          shape.mesh.rotation.y += repulsionStrength * 0.1;
        }

        // Scale based on mouse proximity
        const scale = 1 + repulsionStrength * 3;
        shape.mesh.scale.setScalar(scale);
      });





      // Rotate particle system with mouse influence
      particleSystem.rotation.y = time * 0.1 + mouse.x * 0.2;
      particleSystem.rotation.x = time * 0.06 + mouse.y * 0.1;

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
      isAnimating = false;
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose of geometries and materials
      shapes.forEach(shape => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });

      renderer.dispose();
    };
  } catch (error) {
    console.error('❌ Error in HeroThreeBackground:', error);
  }
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
        opacity: 0.8,
        pointerEvents: 'auto',
      }}
    />
  );
};