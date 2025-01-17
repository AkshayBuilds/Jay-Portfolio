import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full h-[8px] w-[8px] bg-gradient-to-r from-gray-300 via-white to-gray-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jay Prajapati
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 drop-shadow-md mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Crafting Careers, Building Connections
        </motion.p>

        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-gray-300 to-white text-black hover:scale-105 hover:shadow-2xl transition-all">
            Explore My World
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex items-center justify-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-white opacity-60 hover:opacity-90 transition-opacity" />
      </motion.div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-80 z-0 pointer-events-none"></div>
    </section>
  );
};
