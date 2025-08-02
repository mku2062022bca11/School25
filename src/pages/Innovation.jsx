import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Headset as VrHeadset, Rocket, Calculator, Lightbulb, Award, ExternalLink, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Innovation = () => {
  const { currentTheme } = useTheme();
  const [innovationContent, setInnovationContent] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/content/innovation.txt')
      .then(response => response.text())
      .then(text => setInnovationContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const smartLabs = [
    {
      title: 'AI & Robotics Lab',
      icon: Cpu,
      description: '30 high-end workstations with latest processors, GPUs, and collaborative robots for hands-on learning',
      features: ['Industrial 3D printers', 'Collaborative robots', 'AI development platforms', 'Machine learning tools'],
      image: './Innovation/InnovationImg1.jpeg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AR/VR Learning Room',
      icon: VrHeadset,
      description: '25 Oculus Quest headsets with 360° cameras and motion capture technology for immersive experiences',
      features: ['Virtual field trips', 'Historical simulations', 'Scientific visualizations', 'Content creation tools'],
      image: './Innovation/InnovationImg2.jpeg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Space Exploration Lab',
      icon: Rocket,
      description: 'Mission control simulation center with satellite communication equipment and telescope dome',
      features: ['Mars rover prototypes', 'NASA partnerships', 'Computerized tracking', 'Real mission participation'],
      image: './Innovation/InnovationImg3.jpeg',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Math Coding Studio',
      icon: Calculator,
      description: 'Interactive smart boards with mathematical software and programming environments for modeling',
      features: ['Blockchain learning', 'Financial modeling', 'Data analysis tools', 'Olympiad preparation'],
      image: './Innovation/InnovationImg4.jpeg',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const featuredProjects = [
    {
      title: 'EcoSmart',
      subtitle: 'AI-powered waste segregation system',
      grade: 'Grade 11',
      description: 'Revolutionary waste management system using computer vision to automatically sort recyclables with 95% accuracy. Implemented in 5 local community centers.',
      achievement: 'National Environment Innovation Award 2024',
      image: './Innovation/InnovationImg5.jpeg',
      impact: '40% reduction in waste processing time',
      students: ['Arjun Patel', 'Maya Chen', 'Fatima Al-Rashid']
    },
    {
      title: 'MindBridge',
      subtitle: 'Virtual reality therapy for anxiety',
      grade: 'Grade 12',
      description: 'Innovative VR application helping students manage exam stress through immersive meditation experiences. Licensed to 3 other educational institutions.',
      achievement: 'International Education Technology Journal Feature',
      image: './Innovation/InnovationImg6.jpeg',
      impact: '60% reduction in student anxiety levels',
      students: ['Sarah Wilson', 'David Kim', 'Elena Rodriguez']
    },
    {
      title: 'AgriBot',
      subtitle: 'Automated farming companion',
      grade: 'Grade 10',
      description: 'Smart agricultural robot that monitors soil conditions, plant health, and optimizes irrigation systems. Collaborating with local organic farmers.',
      achievement: 'State Science Fair Winner 2024',
      image: './Innovation/InnovationImg7.jpeg',
      impact: '40% water usage reduction',
      students: ['Raj Patel', 'Sophia Martinez', 'Chen Wei']
    },
    {
      title: 'CodeCare',
      subtitle: 'Medical diagnosis assistant',
      grade: 'Grade 12',
      description: 'AI-powered preliminary health screening system designed for rural healthcare applications. Partnership established with local healthcare clinic.',
      achievement: 'Healthcare Innovation Challenge Finalist',
      image: './Innovation/InnovationImg8.jpeg',
      impact: '85% accuracy in preliminary diagnosis',
      students: ['Priya Sharma', 'Michael Johnson', 'Aisha Patel']
    }
  ];

  const startupIdeas = [
    'EduTech platform for personalized learning',
    'Sustainable fashion using recycled materials',
    'Food delivery app optimizing for minimal waste',
    'Mental health support chatbot for teenagers',
    'Urban farming solutions for apartment living',
    'Renewable energy storage innovations',
    'Cultural exchange platform for global students',
    'Smart home automation for elderly care',
    'Blockchain-based academic credential verification',
    'AI-powered language learning companion'
  ];

  const innovationPartners = [
    { name: 'Google for Education', logo: '🔍', type: 'Technology Partner' },
    { name: 'Microsoft', logo: '💻', type: 'Development Tools' },
    { name: 'MIT Media Lab', logo: '🎓', type: 'Research Collaboration' },
    { name: 'Stanford d.school', logo: '💡', type: 'Design Thinking' },
    { name: 'IBM Watson', logo: '🤖', type: 'AI Training' },
    { name: 'Tata Consultancy Services', logo: '🏢', type: 'Industry Mentor' },
    { name: 'ISRO', logo: '🚀', type: 'Space Technology' },
    { name: 'IIT Network', logo: '⚙️', type: 'Engineering Programs' }
  ];

  const [currentStartupIndex, setCurrentStartupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartupIndex((prev) => (prev + 1) % startupIdeas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Innovation/InnovationImg9.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Innovation <span className={`${currentTheme.primary}`}>& Labs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Where creativity meets technology - fostering the next generation of innovators and entrepreneurs
          </motion.p>
        </div>
      </section>

      {/* Smart Labs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Smart Innovation Labs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities equipped with cutting-edge technology for hands-on learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {smartLabs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${lab.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <lab.icon className="text-white" size={64} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${currentTheme.primaryDark} mb-3 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                      {lab.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {lab.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {lab.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className={`w-2 h-2 ${currentTheme.primaryBg} rounded-full`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Featured Student Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Groundbreaking innovations developed by our talented students making real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${currentTheme.primaryBg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {project.grade}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Award className="text-yellow-400" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${currentTheme.primaryDark} mb-2 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p className={`${currentTheme.primary} font-semibold mb-3`}>
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="text-green-500" size={16} />
                        <span className="text-sm text-green-600 font-semibold">{project.impact}</span>
                      </div>
                      <button className={`text-sm ${currentTheme.primary} font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all duration-300`}>
                        <span>Learn More</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Cell */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Student Incubation Cell</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurturing entrepreneurial minds with mentorship, resources, and startup development programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className={`bg-gradient-to-br ${currentTheme.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <Lightbulb className="mb-6" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Current Startup Ideas in Development</h3>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 min-h-[120px] flex items-center">
                    <motion.div
                      key={currentStartupIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-lg font-semibold"
                    >
                      💡 {startupIdeas[currentStartupIndex]}
                    </motion.div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm opacity-80">Idea {currentStartupIndex + 1} of {startupIdeas.length}</span>
                    <div className="flex space-x-1">
                      {startupIdeas.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentStartupIndex ? 'bg-white' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Users className={`${currentTheme.primary} mb-3`} size={32} />
                <h4 className={`text-lg font-bold ${currentTheme.primaryDark} mb-2`}>Mentorship Programs</h4>
                <p className="text-gray-600">Weekly sessions with industry experts and quarterly pitch presentations to investor panels</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Lightbulb className={`${currentTheme.primary} mb-3`} size={32} />
                <h4 className={`text-lg font-bold ${currentTheme.primaryDark} mb-2`}>Innovation Support</h4>
                <p className="text-gray-600">Business plan development, IP guidance, and marketing support for student ventures</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Award className={`${currentTheme.primary} mb-3`} size={32} />
                <h4 className={`text-lg font-bold ${currentTheme.primaryDark} mb-2`}>Success Stories</h4>
                <p className="text-gray-600">12 startups launched by alumni with ₹50 lakhs annual innovation fund allocation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Partners */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Innovation Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders to provide cutting-edge resources and mentorship
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {innovationPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  <h4 className="font-bold mb-2 text-sm group-hover:text-white transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-400">{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '150+', label: 'Active Projects' },
              { number: '25+', label: 'Patents Filed' },
              { number: '12', label: 'Alumni Startups' },
              { number: '₹50L', label: 'Innovation Fund' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-3xl md:text-4xl font-bold ${currentTheme.primary} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;