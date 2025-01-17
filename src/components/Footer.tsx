import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className="bg-black py-12 px-4 relative overflow-hidden">
      {/* Animated line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ x: '-100%' }}
        animate={inView ? { x: '100%' } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4">Jay Prajapati</h3>
            <p className="text-gray-400">
              Transforming HR practices with innovation and empathy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            {['About', 'Services', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-400">
              Stay updated with the latest HR insights and updates.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Jay Prajapati. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};