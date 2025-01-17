import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Phone, Instagram, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-shadow"
                  placeholder="Your mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-shadow"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                Ready to transform your HR practices? Let's discuss how we can work together
                to achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  text: 'hr.jayprajapati@gmail.com', 
                  href: 'mailto:hr.jayprajapati@gmail.com',
                  hoverColor: 'hover:text-blue-400'
                },
                { 
                  icon: Phone, 
                  text: '+91 9106940132', 
                  href: 'tel:+919106940132',
                  hoverColor: 'hover:text-green-400'
                },
                { 
                  icon: MessageCircle, 
                  text: 'WhatsApp', 
                  href: 'https://wa.me/919106940132',
                  hoverColor: 'hover:text-[#25D366]'
                },
                { 
                  icon: Linkedin, 
                  text: 'LinkedIn Profile', 
                  href: 'https://www.linkedin.com/in/jayprajapati3l6/',
                  hoverColor: 'hover:text-[#0A66C2]'
                },
                { 
                  icon: Instagram, 
                  text: 'Instagram', 
                  href: 'https://www.instagram.com/hrjayprajapati',
                  hoverColor: 'hover:text-[#E4405F]'
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target='_blank'
                  className={`flex items-center space-x-4 text-gray-400 ${item.hoverColor} transition-colors`}
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};