import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Instagram, Phone, MessageCircle, Download } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jayprajapati3l6/',
    hoverColor: 'hover:text-[#0A66C2]',
    label: 'LinkedIn'
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/919106940132',
    hoverColor: 'hover:text-[#25D366]',
    label: 'WhatsApp'
  },
  {
    icon: Phone,
    href: 'tel:+919106940132',
    hoverColor: 'hover:text-[#4CAF50]',
    label: 'Call'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/hrjayprajapati',
    hoverColor: 'hover:text-[#E4405F]',
    label: 'Instagram'
  }
];

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    const fileUrl = '/JayPrajapatiCV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Jay_Prajapati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer ref={ref} className="bg-black py-8 sm:py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left">
          {/* First Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Jay Prajapati</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming HR practices with innovation and empathy
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border border-gray-800 transition-all duration-300 
                    filter grayscale hover:grayscale-0 ${social.hoverColor} 
                    hover:border-transparent hover:scale-110`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Services', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Stay updated with the latest HR insights and updates.
            </p>

            {/* Download CV Button */}
            <motion.button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 
                border border-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">My Profile</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Jay Prajapati. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};