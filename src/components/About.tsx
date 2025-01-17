import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Heart, Lightbulb, Target, Users, Zap } from 'lucide-react';

const traits = [
  { icon: Heart, label: 'Empathy', description: 'Understanding people deeply' },
  { icon: Users, label: 'Leadership', description: 'Guiding teams to success' },
  { icon: Lightbulb, label: 'Innovation', description: 'Driving positive change' },
  { icon: Brain, label: 'Strategy', description: 'Smart solutions for growth' },
  { icon: Target, label: 'Focus', description: 'Result-oriented approach' },
  { icon: Zap, label: 'Energy', description: 'Dynamic work ethic' },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="about" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <div className="relative group">
            <img
              src="/Jay.jpeg"
              alt="Jay Prajapati"
              className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg flex items-center justify-center">
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 mb-8">
            As an experienced HR professional, I seamlessly blend traditional human resource methodologies with forward-thinking, innovative approaches to cultivate meaningful workplace experiences. My passion lies in crafting people-first strategies that foster growth, empower teams, and drive both individual and organizational success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  className="p-4 bg-gray-800 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <trait.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h3 className="text-white font-semibold">{trait.label}</h3>
                  <p className="text-gray-400 text-sm">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};