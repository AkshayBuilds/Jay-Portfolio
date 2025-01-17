import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, Target,  Heart,
  TrendingUp, LineChart, MessageCircle 
} from 'lucide-react';

// Group services by category
const serviceCategories = [
  {
    title: "Recruitment & Performance",
    description: "Strategic talent acquisition and performance optimization",
    services: [
      {
        icon: Users,
        title: "Talent Acquisition",
        description: "Strategic recruitment and talent sourcing to build high-performing teams that align with organizational goals.",
        color: "from-blue-500/20 to-blue-600/20",
        iconColor: "text-blue-400"
      },
      {
        icon: Target,
        title: "Performance Management",
        description: "Customized training programs to enhance skills, foster career growth, and ensure employee success.",
        color: "from-indigo-500/20 to-indigo-600/20",
        iconColor: "text-indigo-400"
      }
    ]
  },
  {
    title: "Growth & Culture",
    description: "Building strong organizational culture and employee development",
    services: [
      {
        icon: TrendingUp,
        title: "Employee Development",
        description: "Career progression and skill enhancement programs",
        color: "from-green-500/20 to-green-600/20",
        iconColor: "text-green-400"
      },
      {
        icon: Heart,
        title: "Employee Relations",
        description: "Fostering positive workplace relationships and culture",
        color: "from-red-500/20 to-red-600/20",
        iconColor: "text-red-400"
      }
    ]
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="services" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive HR solutions tailored to elevate your organization's potential
          </p>
        </motion.div>

        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-400">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service) => (
                  <motion.div
                    key={service.title}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl group-hover:blur-2xl transition-all duration-300`} />
                    <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <service.icon className={`w-12 h-12 ${service.iconColor} mb-6`} />
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <LineChart className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Discuss Your HR Needs</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};