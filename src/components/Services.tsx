import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Rocket, LineChart, BookOpen, Heart, Shield } from 'lucide-react';

const services = [
  {
    title: 'Talent Acquisition',
    description: 'Strategic recruitment and talent sourcing',
    icon: Users,
    stats: { success: 95, projects: 200 },
  },
  {
    title: 'Employee Development',
    description: 'Career growth and training programs',
    icon: Rocket,
    stats: { success: 88, projects: 150 },
  },
  {
    title: 'Performance Management',
    description: 'Goal setting and achievement tracking',
    icon: LineChart,
    stats: { success: 92, projects: 180 },
  },
  {
    title: 'Learning & Development',
    description: 'Skill enhancement initiatives',
    icon: BookOpen,
    stats: { success: 90, projects: 120 },
  },
  {
    title: 'Employee Relations',
    description: 'Fostering positive workplace culture',
    icon: Heart,
    stats: { success: 94, projects: 250 },
  },
  {
    title: 'Compliance Management',
    description: 'Ensuring regulatory adherence',
    icon: Shield,
    stats: { success: 98, projects: 300 },
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="services" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          HR Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group perspective"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <motion.div
                className="bg-black p-8 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform-gpu preserve-3d group-hover:rotate-y-180"
                whileHover={{ scale: 1.05 }}
              >
                {/* Front */}
                <div className="flex flex-col items-center text-center backface-hidden">
                  <service.icon className="w-12 h-12 mb-6 text-white" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 p-8 bg-white text-black rounded-xl rotate-y-180 backface-hidden">
                  <div className="h-full flex flex-col items-center justify-center">
                    <h4 className="text-lg font-bold mb-4">Success Metrics</h4>
                    <div className="space-y-4 w-full">
                      <div>
                        <p className="text-sm mb-1">Success Rate</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-black h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${service.stats.success}%` }}
                            transition={{ delay: 0.5, duration: 1 }}
                          />
                        </div>
                        <p className="text-right text-sm mt-1">{service.stats.success}%</p>
                      </div>
                      <p className="text-center mt-4">
                        {service.stats.projects}+ Projects Completed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};