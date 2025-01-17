import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = () => {
    // Replace 'Jay_Prajapati_Resume.pdf' with your actual resume file name
    const fileUrl = '/JayPrajapatiCV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Jay_Prajapati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="home"
      style={{ opacity, y }}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden will-change-transform"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-white via-gray-300 to-white"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Gradient Orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
          animate={{
            x: mousePosition.x ? mousePosition.x - 250 : 0,
            y: mousePosition.y ? mousePosition.y - 250 : 0,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Mesh Grid */}
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-500 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Sparkle effect */}
        <motion.div
          className="absolute -inset-10 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Jay Prajapati
          </motion.h1>
          
          {/* Animated underline */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent absolute -bottom-2 left-0 right-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </div>

        <motion.div className="relative inline-block">
          <motion.p
            className="text-xl md:text-2xl text-gray-300 drop-shadow-md mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Crafting Careers, Building Connections
          </motion.p>
          
          {/* Floating sparkles */}
          <motion.div
            className="absolute -right-8 -top-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-white/30" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button className="group relative px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-gray-300 to-white text-black hover:scale-105 hover:shadow-2xl transition-all overflow-hidden">
            <span className="relative z-10">Explore My World</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white"
              initial={{ x: "100%" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            />
          </button>

          <motion.button
            onClick={handleDownload}
            className="group relative px-8 py-3 text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:scale-105 hover:shadow-2xl transition-all overflow-hidden"
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center justify-center gap-2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.p
          className="text-sm text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
        <ChevronDown className="w-10 h-10 text-white opacity-60 hover:opacity-90 transition-opacity" />
      </motion.div>

      {/* Enhanced gradient overlay with noise texture */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black opacity-60 z-[1] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </motion.section>
  );
};
