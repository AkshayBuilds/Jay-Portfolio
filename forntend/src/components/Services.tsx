import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  UserCheck,
  BarChart2,
  Network,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Helping organizations identify and recruit top-tier leadership and executive talent to drive strategic goals and long-term success.",
  },
  {
    icon: UserCheck,
    title: "Talent Acquisition",
    description: "Designing and implementing effective recruitment strategies to attract, engage, and retain the best candidates for your organization's needs.",
  },
  {
    icon: BarChart2,
    title: "Performance Management",
    description: "Empowering teams through customized performance evaluation frameworks, skill development programs, and continuous feedback mechanisms.",
  },
  {
    icon: Network,
    title: "Industry Mapping",
    description: "Analyzing industry trends and workforce dynamics to align talent strategies with emerging market demands and organizational objectives.",
  }
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="services" className="min-h-screen bg-black py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Area of Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Expert HR solutions crafted to meet your unique business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative bg-gray-900 p-6 sm:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-8">{service.description}</p>
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
          className="text-center mt-12 sm:mt-20"
        >
          <a
            href="#Contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-white rounded-full font-semibold hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 border border-gray-800 hover:border-gray-700 text-sm sm:text-base"
          >
            <span>Discuss Your HR Needs</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};