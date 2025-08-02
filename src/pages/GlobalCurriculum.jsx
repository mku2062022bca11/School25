import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Video, Download, CheckCircle, XCircle, Languages, Trophy, Handshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GlobalCurriculum = () => {
  const { currentTheme } = useTheme();
  const [globalContent, setGlobalContent] = useState('');

  useEffect(() => {
    fetch('/content/global-curriculum.txt')
      .then(response => response.text())
      .then(text => setGlobalContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const programs = [
    {
      title: 'Language Laboratory',
      icon: Languages,
      description: 'State-of-the-art digital language laboratory with 50 workstations and interactive software',
      features: ['Native speaker sessions', 'Cultural immersion programs', 'Certification courses', 'AI-powered pronunciation training'],
      image: './Global/GlobalImg1.jpeg'
    },
    {
      title: 'Cultural Exchange Program',
      icon: Handshake,
      description: 'Sister school partnerships in 8 countries across 4 continents for authentic cultural learning',
      features: ['Student exchange programs', 'Virtual cultural festivals', 'Global classroom sessions', 'International service learning'],
      image: './Global/GlobalImg2.jpeg'
    },
    {
      title: 'Model United Nations',
      icon: Trophy,
      description: 'Comprehensive MUN program developing diplomatic skills and global awareness',
      features: ['Annual Zenith MUN conference', 'International competitions', 'Diplomatic training', 'Global issues curriculum'],
      image: './Global/GlobalImg3.jpeg'
    }
  ];

  const comparison = [
    {
      aspect: 'Learning Approach',
      cbse: 'Subject-focused learning',
      zenith: 'Interdisciplinary project-based learning',
      advantage: 'zenith'
    },
    {
      aspect: 'Assessment Method',
      cbse: 'Exam-oriented assessment',
      zenith: 'Continuous assessment with international benchmarking',
      advantage: 'zenith'
    },
    {
      aspect: 'Context & Examples',
      cbse: 'Local context and examples',
      zenith: 'Global case studies and multicultural perspectives',
      advantage: 'zenith'
    },
    {
      aspect: 'Language Focus',
      cbse: 'Hindi/English bilingual approach',
      zenith: 'Multilingual environment (5+ languages offered)',
      advantage: 'zenith'
    },
    {
      aspect: 'Evaluation Methods',
      cbse: 'Standard evaluation methods',
      zenith: 'Innovative evaluation including peer assessment',
      advantage: 'zenith'
    },
    {
      aspect: 'Board Recognition',
      cbse: 'Nationally recognized curriculum',
      zenith: 'CBSE + International recognition',
      advantage: 'equal'
    }
  ];

  const virtualClassFeatures = [
    {
      title: 'Interactive Whiteboards',
      description: 'Digital learning tools for enhanced classroom engagement',
      icon: '📱'
    },
    {
      title: 'Global Collaboration',
      description: 'Real-time collaboration with partner schools worldwide',
      icon: '🌍'
    },
    {
      title: 'AI-Powered Learning',
      description: 'Personalized learning pathways adapted to each student',
      icon: '🤖'
    },
    {
      title: 'AR/VR Experiments',
      description: 'Augmented reality science experiments and simulations',
      icon: '🥽'
    },
    {
      title: 'Virtual Field Trips',
      description: 'Immersive visits to international museums and landmarks',
      icon: '🏛️'
    },
    {
      title: 'Digital Portfolios',
      description: 'Comprehensive tracking of student progress and achievements',
      icon: '📊'
    }
  ];

  const downloadableResources = [
    {
      title: 'Complete Curriculum Structure',
      description: '50-page comprehensive guide covering all academic programs',
      size: '12 MB',
      icon: BookOpen
    },
    {
      title: 'Language Learning Schedules',
      description: 'Detailed timetables for all language programs offered',
      size: '3 MB',
      icon: Languages
    },
    {
      title: 'International Partnership Guide',
      description: 'Information about global collaborations and opportunities',
      size: '8 MB',
      icon: Globe
    },
    {
      title: 'Assessment Rubrics',
      description: 'Detailed evaluation criteria and grading standards',
      size: '5 MB',
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Global/GlobalImg4.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Global <span className={`${currentTheme.primary}`}>Curriculum</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            CBSE excellence integrated with international best practices for comprehensive global education
          </motion.p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to develop global competencies and cultural awareness
            </p>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${currentTheme.primaryBg} rounded-full mb-6`}>
                    <program.icon className="text-white" size={32} />
                  </div>
                  <h3 className={`text-3xl font-bold ${currentTheme.primaryDark} mb-4`}>
                    {program.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`${currentTheme.primary} flex-shrink-0`} size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>CBSE vs Global Integrated System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our integrated approach enhances traditional CBSE curriculum
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`bg-gradient-to-r ${currentTheme.gradient} text-white`}>
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold">Traditional CBSE</th>
                    <th className="px-6 py-4 text-left font-semibold">Zenith Global Integrated</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.aspect}</td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          {item.advantage === 'zenith' && <XCircle className="text-red-400" size={16} />}
                          {item.advantage === 'equal' && <CheckCircle className="text-green-400" size={16} />}
                          <span>{item.cbse}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className={`${item.advantage === 'zenith' ? 'text-green-400' : item.advantage === 'equal' ? 'text-green-400' : 'text-gray-400'}`} size={16} />
                          <span className={item.advantage === 'zenith' ? 'font-semibold text-green-700' : ''}>{item.zenith}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Class Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Virtual Classroom Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology enhancing the learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./Global/GlobalImg5.jpeg"
                  alt="Virtual Classroom"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white p-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                    <Video size={48} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {virtualClassFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className={`font-bold ${currentTheme.primaryDark} mb-2`}>{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Download Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides and documentation for our global curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${currentTheme.primaryBg} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{resource.size}</span>
                  <button className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105`}>
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalCurriculum;