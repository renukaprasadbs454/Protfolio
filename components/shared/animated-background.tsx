"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated grid */}
      <div className="fixed inset-0 grid-pattern grid-pattern-fade pointer-events-none z-0" />

      {/* Floating blur gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-cyan-600/6 blur-[100px]"
        />

        {/* Mouse-following glow */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
