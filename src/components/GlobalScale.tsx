import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { BackSide, Mesh } from 'three';
import { useTheme } from './ThemeContext';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      points: any;
      sphereGeometry: any;
      pointsMaterial: any;
      meshBasicMaterial: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const GlobeMesh = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  // const points = useMemo(() => {
  //   const p = [];
  //   for (let i = 0; i < 300; i++) {
  //     const theta = MathUtils.randFloatSpread(360);
  //     const phi = MathUtils.randFloatSpread(360);
  //     p.push(
  //       5 * Math.sin(theta) * Math.cos(phi),
  //       5 * Math.sin(theta) * Math.sin(phi),
  //       5 * Math.cos(theta)
  //     );
  //   }
  //   return new Float32Array(p);
  // }, []);

  const color = theme === 'dark' ? '#6366f1' : '#0284c7';

  return (
    <group>
        {/* Core Sphere */}
        <Sphere args={[2.5, 64, 64]} ref={meshRef}>
            <meshStandardMaterial 
                color={theme === 'dark' ? '#000000' : '#ffffff'} 
                wireframe 
                transparent
                opacity={0.1}
            />
        </Sphere>
        
        {/* Dots Sphere */}
        <points>
            <sphereGeometry args={[2.6, 64, 64]} />
            <pointsMaterial size={0.02} color={color} transparent opacity={0.4} sizeAttenuation />
        </points>

        {/* Atmosphere Glow */}
        <mesh scale={[2.4, 2.4, 2.4]}>
             <sphereGeometry args={[1, 32, 32]} />
             <meshBasicMaterial color={color} transparent opacity={0.05} side={BackSide} />
        </mesh>
    </group>
  );
};

export const GlobalScale: React.FC = () => {
  return (
    <section className="py-24 bg-[#02040a] overflow-hidden relative min-h-[800px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/10 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-brand-700/50">
                Global Infrastructure
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Accept payments from <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Everywhere
                </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                Our global banking network ensures your payments succeed, no matter where your customers are. 
                Real-time currency conversion in 100+ currencies.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                <div>
                    <p className="text-4xl font-bold text-white mb-1">130+</p>
                    <p className="text-slate-500 text-sm uppercase tracking-wider">Currencies Supported</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-white mb-1">200M+</p>
                    <p className="text-slate-500 text-sm uppercase tracking-wider">Global Cards</p>
                </div>
            </div>
        </div>

        <div className="h-[500px] w-full relative cursor-move">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <GlobeMesh />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                {/* @ts-ignore */}
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
      </div>
    </section>
  );
};