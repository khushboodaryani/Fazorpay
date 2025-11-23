import { Center, Environment, Float, OrbitControls, Sparkles, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import { useTheme } from './ThemeContext';

// Extend JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
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

  // Material properties based on theme
  const materialProps = theme === 'dark' 
    ? { color: "#FFD700", metalness: 0.9, roughness: 0.1, emissive: "#553300", emissiveIntensity: 0.2 }
    : { color: "#0ea5e9", metalness: 0.7, roughness: 0.2, emissive: "#004466", emissiveIntensity: 0.1 };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
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

const Loader = () => {
  return (
    <Center>
       <mesh>
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial color="gray" wireframe />
       </mesh>
    </Center>
  )
}

export const ThreeDollar: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing mx-auto">
      <Canvas 
        className="w-full h-full"
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} 
      >
        <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Environment preset="city" />
            <DollarSymbol />
            <Sparkles count={50} scale={6} size={4} speed={0.4} opacity={0.5} color="#6366f1" />
            <OrbitControls 
                {...({
                    enableZoom: false, 
                    autoRotate: true, 
                    autoRotateSpeed: 2,
                    minPolarAngle: Math.PI / 4,
                    maxPolarAngle: Math.PI - Math.PI / 4
                } as any)}
            />
        </Suspense>
      </Canvas>
    </div>
  );
};