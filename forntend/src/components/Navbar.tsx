import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#Contact" },
];

const Logo = () => (
  <motion.a
    href="#home"
    className="flex items-center space-x-2 group cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-white to-gray-400 rounded-lg overflow-hidden"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0.5 bg-black rounded-lg flex items-center justify-center"
        whileHover={{ scale: 0.85 }}
      >
        <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          J
        </span>
      </motion.div>
    </motion.div>

    <div className="flex flex-col">
      <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-none">
        Jay
      </span>
      <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wider group-hover:text-white transition-colors">
        PRAJAPATI
      </span>
    </div>
  </motion.a>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    const observerOptions = {
      threshold: [0.2, 0.8],
      rootMargin: "-64px 0px -100px 0px",
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    // Add smooth scroll behavior
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href?.startsWith("#")) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-black/90 via-gray-900 to-black/90 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 ">
            <Logo />

            {/* Desktop Navigation - Remove Download Button */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`text-gray-300 hover:text-white font-medium transition-all relative cursor-pointer${
                      activeSection === item.href.substring(1) ? "text-white" : ""
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - Remove Download Button */}
            <div className="md:hidden">
              <motion.button
                className="text-white"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-16 left-0 w-full bg-gradient-to-b from-black via-gray-900/95 to-black/95 backdrop-blur-lg md:hidden border-t border-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`block text-base font-semibold transition-all relative ${
                      activeSection === item.href.substring(1) 
                        ? "text-white" 
                        : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-white"
                          layoutId="mobileActiveSection"
                        />
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
