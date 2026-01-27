import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Animated particles background
const ParticleField = () => {
  const meshRef = useRef();
  const particleCount = 1000;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Muted blue colors
      colors[i * 3] = 0.2 + Math.random() * 0.3;
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.4 + Math.random() * 0.4;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Floating grid
const FloatingGrid = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial
        color="#475569"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <ParticleField />
          <FloatingGrid />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Engineering Technology & AI Systems That
              <span className="gradient-text"> Scale</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Stratosport partners with leadership teams to build resilient platforms,
            AI-powered products, and high-performing engineering organizations.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-600"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Senior-only consulting</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Startup to enterprise experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-slate-700" />
              <span>Production-grade systems</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                Engage Stratosport
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <a href="#capabilities">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-6 text-lg transition-all duration-300 hover:border-slate-400"
              >
                Explore Capabilities
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};