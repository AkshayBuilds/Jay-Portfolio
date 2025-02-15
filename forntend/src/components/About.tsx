import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartHandshake, UserCog, Sparkles, Workflow, Target, Rocket } from 'lucide-react';

const traits = [
  { icon: HeartHandshake, label: 'Empathy', description: 'Understanding people deeply' },
  { icon: UserCog, label: 'Leadership', description: 'Guiding teams to success' },
  { icon: Sparkles, label: 'Innovation', description: 'Driving positive change' },
  { icon: Workflow, label: 'Strategy', description: 'Smart solutions for growth' },
  { icon: Target, label: 'Focus', description: 'Result-oriented approach' },
  { icon: Rocket, label: 'Energy', description: 'Dynamic and Adaptive Work Ethic' },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      id="about" 
      className="min-h-screen bg-gray-900 py-12 sm:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <div className="relative group w-full max-w-sm mx-auto md:max-w-none">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full">
              <img
                src="/jay.jpg"
                alt="Jay Prajapati"
                className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] object-cover w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                About Me
              </h2>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                As an experienced HR professional, I seamlessly blend traditional human resource methodologies with forward-thinking, innovative approaches to cultivate meaningful workplace experiences. My passion lies in crafting people-first strategies that foster growth, empower teams, and drive both individual and organizational success.
              </p>
            </motion.div>

            {/* Traits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full p-3 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <trait.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-gray-300 group-hover:text-white transition-colors" />
                        <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{trait.label}</h3>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm">{trait.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};