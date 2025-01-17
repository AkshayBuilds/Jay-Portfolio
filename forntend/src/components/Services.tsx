import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, Target, Heart,
  TrendingUp, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Strategic recruitment and talent sourcing to build high-performing teams that align with organizational goals.",
  },
  {
    icon: Target,
    title: "Performance Management",
    description: "Customized training programs to enhance skills, foster career growth, and ensure employee success.",
  },
  {
    icon: TrendingUp,
    title: "Employee Development",
    description: "Career progression and skill enhancement programs",
  },
  {
    icon: Heart,
    title: "Employee Relations",
    description: "Fostering positive workplace relationships and culture",
  }
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
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive HR solutions tailored to elevate your organization's potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-8">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a 
            href="#Contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-white rounded-full font-semibold hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 border border-gray-800 hover:border-gray-700"
          >
            <span>Discuss Your HR Needs</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};