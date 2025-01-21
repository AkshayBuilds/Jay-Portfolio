import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

const allProjects: Project[] = [
  {
    title: "HR Management System Transformation",
    description: "Led the digital transformation of HR processes through a comprehensive management system that revolutionized employee lifecycle management.",
    impact: "Reduced paperwork by 80% and improved process efficiency by 60%",
    technologies: ["Employee Database", "Performance Tracking", "Document Management", "Workflow Automation"],
    liveUrl: "https://hrms-demo.jayprajapati.dev",
    caseStudyUrl: "/case-studies/hrms.pdf"
  },
  {
    title: "Next-Gen Talent Acquisition Portal",
    description: "Spearheaded the development of an innovative recruitment portal that transformed the hiring process with AI-powered candidate matching.",
    impact: "Reduced hiring time by 40% and improved candidate satisfaction by 45%",
    technologies: ["ATS Integration", "Interview Scheduling", "Candidate Assessment", "Analytics Dashboard"],
    liveUrl: "https://recruitment.jayprajapati.dev",
    caseStudyUrl: "/case-studies/recruitment.pdf"
  },
  {
    title: "Employee Engagement Revolution",
    description: "Conceptualized and implemented a comprehensive engagement platform that fostered a culture of recognition and continuous feedback.",
    impact: "Increased employee satisfaction scores by 35% and reduced turnover by 25%",
    technologies: ["Rewards System", "Feedback Tools", "Event Management", "Survey Platform"],
    liveUrl: "https://engagement.jayprajapati.dev",
    caseStudyUrl: "/case-studies/engagement.pdf"
  },
  {
    title: "Learning & Development Hub",
    description: "Designed an innovative learning ecosystem that democratized skill development and career growth opportunities.",
    impact: "Achieved 90% employee participation and 40% increase in internal promotions",
    technologies: ["Course Management", "Skills Assessment", "Certification Tracking", "Learning Analytics"],
    liveUrl: "https://training.jayprajapati.dev",
    caseStudyUrl: "/case-studies/training.pdf"
  },
  {
    title: "Culture Transformation Initiative",
    description: "Led a company-wide culture transformation program focusing on diversity, inclusion, and employee well-being.",
    impact: "Improved diversity metrics by 45% and employee well-being scores by 50%",
    technologies: ["DEI Metrics", "Well-being Programs", "Cultural Assessment", "Change Management"],
    caseStudyUrl: "/case-studies/culture.pdf"
  },
  {
    title: "HR Analytics Dashboard",
    description: "Developed a comprehensive HR analytics solution providing real-time insights into workforce metrics.",
    impact: "Enabled data-driven decision making, resulting in 30% cost optimization",
    technologies: ["Predictive Analytics", "Workforce Planning", "Cost Analysis", "Performance Metrics"],
    caseStudyUrl: "/case-studies/analytics.pdf"
  }
];

const projectsAnimation = {
  hidden: { 
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = window.innerWidth < 768;
  const displayedProjects = showAll 
    ? allProjects.slice(0, 6) 
    : isMobile 
      ? allProjects.slice(0, 2) 
      : allProjects.slice(0, 4);

  useEffect(() => {
    const handleResize = () => {
      setShowAll(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
          "Pioneering HR Strategies for Organizational Excellence"
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Innovative HR projects that reshaped workforce management, optimized operations, and empowered organizations to achieve their full potential through digital transformation and strategic solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={projectsAnimation}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gray-800/50 p-2.5 sm:p-3 rounded-lg">
                      <p className="text-green-400 font-semibold text-sm sm:text-base">Impact:</p>
                      <p className="text-gray-300 text-sm sm:text-base">{project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-gray-800 rounded-full text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
          >
            <span className="flex items-center gap-2 text-gray-300 group-hover:text-white text-sm sm:text-base">
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>View More Projects <ChevronDown className="w-4 h-4" /></>
              )}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 