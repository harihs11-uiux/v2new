import { motion } from 'motion/react';
import aiLogo from "figma:asset/f4e406e5f3133d60cef170224e821c55202b23ec.png";

interface SentinelLogoProps {
  size?: number;
  className?: string;
}

export default function SentinelLogo({ size = 40, className = "" }: SentinelLogoProps) {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 isolate ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 3D Sphere Container with Axis Rotation */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 10, -10, 0],
        }}
        transition={{
          rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-full h-full rounded-full overflow-hidden shadow-[0_10px_30px_rgba(56,116,255,0.3)] border border-white/20"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(135deg, rgba(56,116,255,0.9) 0%, rgba(138,88,255,0.9) 50%, rgba(255,192,255,0.9) 100%)',
        }}
      >
        {/* Iridescent Shimmer Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
        
        {/* Center AI Icon */}
        <div className="absolute inset-0 flex items-center justify-center p-[15%]">
          <img 
            src={aiLogo}
            alt=""
            className="w-full h-full object-contain brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          />
        </div>

        {/* Spherical Depth Shadowing */}
        <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.5),inset_10px_10px_25px_rgba(255,255,255,0.3)] pointer-events-none" />
        
        {/* Specular Highlight */}
        <div className="absolute top-[8%] left-[18%] w-[35%] h-[20%] bg-white/50 blur-[6px] rounded-full rotate-[-20deg] pointer-events-none" />
      </motion.div>
    </div>
  );
}
