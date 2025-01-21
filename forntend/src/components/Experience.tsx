import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    year: 'may 2024 - Present',
    title: 'Executive Search Consultant',
    company: (
      <a 
        href="https://hiringcraft.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        HiringCraft (A Reputed Executive Search Firm)
      </a>
    ),
    description: 'An executive search firm managed by specialists with deep experience in top team building.',
    expandedDescription: (
      <>
        <p className='my-3'>
          The competencies are centred around hiring for the most critical roles, spanning from CXOs to General Managers of the function. Every placement is treated as a value-creation opportunity in client businesses. Professional matchmaking has become a balanced combination of art, science, and behavioral insights in the VUCA world.
        </p>
        <p>Executive Search & Selection for various industries:</p>
        <p>Technology, Digital, AI & ML</p>
        <p>Heavy Engineering & Infrastructure</p>
        <p>Minings & Metal</p>
        <p>Construction & Road Construction</p>
      </>
    ),
    icon: () => (
      <img
        src="/hclogo.png"
        alt="HiringCraft Logo"
        className="w-6 h-6 object-contain"
      />
    ),
    media: [
      {
        title: "Attending the Program on 'Startup Ecosystem In India'",
        description: "",
        imageUrl: "/hcm.png",
      },
      {
        title: "Thrilled to have participated in the 'Social Media Techniques and Use for Business Development' workshop hosted by the Ahmedabad Management Association (AMA).",
        description: "It was an incredible experience, filled with insightful discussions and practical strategies on leveraging social media for business growth. A big thank you to the facilitator, Mr. Deepak Bhatt, and all the amazing professionals I had the chance to learn from and collaborate with.\n\n Looking forward to applying these strategies to drive engagement, strengthen brand awareness, and foster deeper connections within the talent acquisition space!",
        imageUrl: "/hcm2.png",
      },
    ],
  },

  {
    year: 'Aug 2021 - Apr 2024',
    title: 'Talent Acquisition Executive',
    company: (
      <a 
        href="https://www.hiddenbrains.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        Hidden Brains InfoTech (A Leading Software Development MNC in Ahmedabad)
      </a>
    ),
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
    icon: () => (
      <img
        src="/hblogo.png"
        alt="Hidden Brains Logo"
        className="w-6 h-6 object-contain"
      />
    ),
    media: [
      {
        title: "Celebrating 20 years of innovation, growth, and excellence at Hidden Brains!",
        description: "It was an honor to be part of a key program during this milestone event, where I had the opportunity to introduce our amazing team of recruiters, the backbone of building strong, innovative teams. Addressing an audience of more than 500, I shared insights on the pivotal role Recruitment plays in the success of any organization.",
        imageUrl: "/hb.png",
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
  const [currentExperience, setCurrentExperience] = useState(0);
  const [showMedia, setShowMedia] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleNext = () => {
    const currentExp = experiences[currentExperience];
    setCurrentMediaIndex((prev) =>
      prev < (currentExp.media?.length || 1) - 1 ? prev + 1 : prev
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
            Professional Journey
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
                      <exp.icon />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-1 hover:underline">
                        {typeof exp.company === 'string' ? exp.company : exp.company}
                      </p>
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
                              onClick={() => {
                                setCurrentExperience(index);
                                setCurrentMediaIndex(0);
                                setShowMedia(true);
                              }}
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
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                <circle cx="9" cy="9" r="2" />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
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
        {showMedia && experiences[currentExperience].media && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-5xl">
              <div className="absolute -top-2 right-0 z-10">
                <button
                  onClick={() => setShowMedia(false)}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
                >
                  <span className="text-white/70 font-medium group-hover:text-white">Close</span>
                  <X className="w-4 h-4 text-white/70 group-hover:text-white" />
                </button>
              </div>

              <div className="bg-gray-900/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="h-[500px]">
                  {!experiences[currentExperience].media[currentMediaIndex].videoUrl ? (
                    <img
                      src={experiences[currentExperience].media[currentMediaIndex].imageUrl}
                      alt={experiences[currentExperience].media[currentMediaIndex].title}
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
                    {experiences[currentExperience].media[currentMediaIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {experiences[currentExperience].media[currentMediaIndex].description}
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
                    {currentMediaIndex + 1} of {experiences[currentExperience].media.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentMediaIndex === experiences[currentExperience].media.length - 1}
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
