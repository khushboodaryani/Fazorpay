import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, OrbitControls, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';
import { useTheme } from './ThemeContext';

// Extend JSX.IntrinsicElements to include Three.js elements causing errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

const DollarSymbol = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle bobbing is handled by Float, but we can add custom rotation
      // meshRef.current.rotation.y += 0.005;
    }
  });

  // Material properties based on theme
  const materialProps = theme === 'dark' 
    ? { color: "#FFD700", metalness: 0.9, roughness: 0.1, emissive: "#553300", emissiveIntensity: 0.2 }
    : { color: "#0ea5e9", metalness: 0.7, roughness: 0.2, emissive: "#004466", emissiveIntensity: 0.1 };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={meshRef}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={3}
          height={0.5}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.1}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={10}
        >
          $
          <meshStandardMaterial {...materialProps} />
        </Text3D>
      </Center>
    </Float>
  );
};

export const ThreeDollar: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {/* Environment reflections */}
            <Environment preset="city" />

            {/* The Star */}
            <DollarSymbol />

            {/* Particles */}
            <Sparkles count={50} scale={6} size={4} speed={0.4} opacity={0.5} color="#6366f1" />

            {/* Controls */}
            {/* @ts-ignore */}
            <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={2}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 4}
            />
        </Suspense>
      </Canvas>
    </div>
  );
};