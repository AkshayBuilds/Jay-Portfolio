import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Users, Database } from 'lucide-react';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Executive Search Consultant',
    company: 'HIRINGCRAFT CONSULTING LLP',
    description: 'An executive search firm managed by specialists with deep experience in top team building.',
    icon: Search,
  },
  {
    year: '2022 - 2024',
    title: 'Talent Acquisition Executive',
    company: 'Hidden Brains InfoTech',
    description: 'In addition to my data mining role, I took on key responsibilities in talent acquisition',
    icon: Users,
  },
  {
    year: '2021 - 2022',
    title: 'Data Mining Executive',
    company: 'Hidden Brains InfoTech',
    description: 'recruitment team by using my data research skills to find thetop talents',
    icon: Database,
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="experience" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Career Journey
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">{exp.company}</p>
                    <p className="text-gray-500 mt-4">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};