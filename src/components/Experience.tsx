import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const experiences = [
  {
    year: '2024',
    title: 'Executive Search Consultant ',
    company: 'HIRINGCRAFT CONSULTING LLP',
    description: 'An executive search firm managed by specialists with deep experience in top team building.',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: 'Talent Acquisition Executive',
    company: 'Hidden Brains InfoTech',
    description: 'In addition to my data mining role, I took on key responsibilities in talent acquisition',
    icon: Award,
  },
  {
    year: '2021',
    title: 'Data Mining Executive',
    company: 'Hidden Brains InfoTech',
    description: 'recruitment team by using my data research skills to find thetop talents',
    icon: BookOpen,
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="experience" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Career Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <exp.icon className="w-8 h-8 mb-4 text-white inline-block" />
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-gray-500">{exp.description}</p>
                </motion.div>
              </div>

              <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-full h-full bg-white rounded-full flex items-center justify-center text-black font-bold text-sm"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.3 }}
                >
                  {exp.year}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};