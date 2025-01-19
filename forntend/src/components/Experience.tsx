import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Users, X } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Executive Search Consultant',
    company: 'HIRINGCRAFT CONSULTING LLP',
    description: 'An executive search firm managed by specialists with deep experience in top team building.',
    icon: Search,
  },
  {
    year: 'Aug 2021 - Apr 2024',
    title: 'Talent Acquisition Executive',
    company: 'Hidden Brains InfoTech',
    description: `At Hidden Brains InfoTech, I helped make the hiring process easier for our 9-member recruitment team by using my data research skills to find the top talents. I'm great at handling large groups of candidates and keeping everything organized in the hiring system.`,
    expandedDescription: (
      <>
        <p className='my-3'>
          I spent over two years finding great talent using advanced tools. I know how to find the perfect candidates who fit the skills and company needs. I used different ways to search for candidates, like job boards and social media, to match them with the right roles and company culture.
        </p>
        <p className='mb-3'>
          I played a key role in implementing an Applicant Tracking System (ATS) within the company. I oversaw the seamless migration of data to the ATS, providing strategic insights to the development team and customizing core features to meet operational needs. My efforts ensured the entire recruitment team could access accurate, well-organized candidate data, significantly improving recruitment efficiency.
        </p>
        <p className='mb-3'>
          I love learning new things in recruitment technology to make the hiring process faster and better.
        </p>
      </>
    ),
    icon: Users,
    media: [
      {
        title: "Celebrating 20 years of innovation, growth, and excellence at Hidden Brains!",
        description: "It was an honor to be part of a key program during this milestone event, where I had the opportunity to introduce our amazing team of recruiters, the backbone of building strong, innovative teams. Addressing an audience of more than 500, I shared insights on the pivotal role Recruitment plays in the success of any organization.",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGTNvpgVtBg4Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727712896531?e=1737871200&v=beta&t=OudzdrXJ7HbJehypfWu0T-pw1m8qkevWvGO0fzXo-7A",
      },
      {
        title: "A Funny Look in Talent Acquisition",
        description: "I spearheaded a groundbreaking initiative with the Talent Acquisition team. My team and I created a fun and humorous video that offers a playful take on the recruitment process, showcasing how it evolves at every stage with relatable, funny examples. This initiative not only showcased our creative approach to recruitment but also strengthened team engagement and collaboration.",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFBQBYCXc0w5A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727715989579?e=1737871200&v=beta&t=ow8AEbFfngHJVkGWKVPu9PZPHoPNYcborNakJidhy3c",
        videoUrl: "https://www.youtube.com/watch?v=HUleovD3BJU",
      },
    ],
  },
];

const fadeAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 }
};

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showMoreIndex, setShowMoreIndex] = useState<number | null>(null);
  const [showMedia, setShowMedia] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleNext = () => {
    setCurrentMediaIndex((prev) =>
      prev < (experiences[1].media?.length || 1) - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <section ref={ref} id="experience" className="bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
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
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-1">{exp.company}</p>
                      <div className="text-gray-500 mt-4">
                        {exp.description}
                        <AnimatePresence>
                          {showMoreIndex === index && (
                            <motion.div
                              initial={fadeAnimation.initial}
                              animate={fadeAnimation.animate}
                              exit={fadeAnimation.exit}
                              transition={{ duration: 0.3 }}
                            >
                              {exp.expandedDescription}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          {exp.media && (
                            <button
                              onClick={() => setShowMedia(true)}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-all duration-300"
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                <circle cx="9" cy="9" r="2"/>
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                              </svg>
                              View Media
                            </button>
                          )}
                        </div>
                        <div>
                          {exp.expandedDescription && (
                            <button
                              onClick={() => setShowMoreIndex(showMoreIndex === index ? null : index)}
                              className="text-blue-400 hover:underline"
                            >
                              {showMoreIndex === index ? 'See Less' : 'See More'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      <AnimatePresence>
        {showMedia && experiences[1].media && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setShowMedia(false)}
                className="absolute -top-12 right-4 text-white/70 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-gray-900/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="h-[500px]">
                  {currentMediaIndex === 0 ? (
                    <img
                      src={experiences[1].media[currentMediaIndex].imageUrl}
                      alt={experiences[1].media[currentMediaIndex].title}
                      className="w-full h-full object-contain bg-black/40"
                    />
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/HUleovD3BJU?si=g2KpEujQ018dQfrT"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>

                <div className="p-8 border-t border-gray-800">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {experiences[1].media[currentMediaIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {experiences[1].media[currentMediaIndex].description}
                  </p>
                </div>

                <div className="flex justify-center gap-4 p-6 border-t border-gray-800 bg-gray-900/50">
                  <button
                    onClick={handlePrevious}
                    disabled={currentMediaIndex === 0}
                    className="px-6 py-2.5 bg-white/10 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
                  >
                    Previous
                  </button>
                  <span className="flex items-center text-white/80 font-medium">
                    {currentMediaIndex + 1} of {experiences[1].media.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentMediaIndex === experiences[1].media.length - 1}
                    className="px-6 py-2.5 bg-white/10 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
