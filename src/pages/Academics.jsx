import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Star, ChevronRight, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Academics = () => {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('primary');
  const [academicsContent, setAcademicsContent] = useState('');

  useEffect(() => {
    fetch('/content/academics.txt')
      .then(response => response.text())
      .then(text => setAcademicsContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const tabs = [
    { id: 'primary', label: 'Primary School', grades: 'Grades 1-5' },
    { id: 'middle', label: 'Middle School', grades: 'Grades 6-8' },
    { id: 'senior', label: 'Senior School', grades: 'Grades 9-12' }
  ];

  const subjects = {
    primary: [
      { name: 'English', icon: '📚', rating: 4.9, color: 'from-blue-400 to-blue-600' },
      { name: 'Mathematics', icon: '🔢', rating: 4.8, color: 'from-green-400 to-green-600' },
      { name: 'Science', icon: '🔬', rating: 4.9, color: 'from-purple-400 to-purple-600' },
      { name: 'Social Studies', icon: '🌍', rating: 4.7, color: 'from-orange-400 to-orange-600' },
      { name: 'Hindi', icon: '🇮🇳', rating: 4.6, color: 'from-red-400 to-red-600' },
      { name: 'Computer Science', icon: '💻', rating: 4.8, color: 'from-teal-400 to-teal-600' }
    ],
    middle: [
      { name: 'Advanced Mathematics', icon: '📊', rating: 4.9, color: 'from-blue-400 to-blue-600' },
      { name: 'Physics & Chemistry', icon: '⚛️', rating: 4.8, color: 'from-green-400 to-green-600' },
      { name: 'Biology', icon: '🧬', rating: 4.9, color: 'from-purple-400 to-purple-600' },
      { name: 'Foreign Languages', icon: '🗣️', rating: 4.7, color: 'from-orange-400 to-orange-600' },
      { name: 'Design Thinking', icon: '🎨', rating: 4.8, color: 'from-pink-400 to-pink-600' },
      { name: 'Advanced Computing', icon: '🖥️', rating: 4.9, color: 'from-teal-400 to-teal-600' }
    ],
    senior: [
      { name: 'Advanced Physics', icon: '🚀', rating: 4.9, color: 'from-blue-400 to-blue-600' },
      { name: 'Advanced Chemistry', icon: '🧪', rating: 4.8, color: 'from-green-400 to-green-600' },
      { name: 'Advanced Biology', icon: '🦠', rating: 4.9, color: 'from-purple-400 to-purple-600' },
      { name: 'Economics', icon: '📈', rating: 4.7, color: 'from-orange-400 to-orange-600' },
      { name: 'Psychology', icon: '🧠', rating: 4.8, color: 'from-pink-400 to-pink-600' },
      { name: 'Computer Science', icon: '👨‍💻', rating: 4.9, color: 'from-teal-400 to-teal-600' }
    ]
  };

  const teachers = [
    {
      name: 'Dr. Priya Sharma',
      subject: 'Head of Sciences',
      experience: '15 years',
      qualification: 'PhD in Physics from IIT Delhi',
      image: './Academic/AcademicsImg1.jpeg',
      specialization: 'Quantum Physics & Advanced Research'
    },
    {
      name: 'Prof. Michael Johnson',
      subject: 'Mathematics Department',
      experience: '12 years',
      qualification: 'Former Cambridge University Lecturer',
      image: './Academic/AcademicsImg2.jpeg',
      specialization: 'Advanced Mathematics & Olympiad Training'
    },
    {
      name: 'Ms. Aisha Patel',
      subject: 'English Literature',
      experience: '10 years',
      qualification: 'Published Author & Poetry Enthusiast',
      image: './Academic/AcademicsImg3.jpeg',
      specialization: 'Creative Writing & Literary Analysis'
    },
    {
      name: 'Dr. Chen Wei',
      subject: 'Computer Science',
      experience: '8 years',
      qualification: 'AI Researcher with 20+ Publications',
      image: './Academic/AcademicsImg4.jpeg',
      specialization: 'Artificial Intelligence & Machine Learning'
    },
    {
      name: 'Ms. Sofia Rodriguez',
      subject: 'World Languages',
      experience: '11 years',
      qualification: 'Polyglot Speaking 7 Languages',
      image: './Academic/AcademicsImg5.jpeg',
      specialization: 'Multilingual Education & Cultural Studies'
    },
    {
      name: 'Mr. David Thompson',
      subject: 'Sports & Wellness',
      experience: '14 years',
      qualification: 'Former Olympic Athlete',
      image: './Academic/AcademicsImg6.jpeg',
      specialization: 'Athletic Training & Fitness Excellence'
    }
  ];

  const evaluationSteps = [
    {
      step: 1,
      title: 'Continuous Assessment',
      percentage: '40%',
      description: 'Regular quizzes, assignments, projects, and presentations throughout the year',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Periodic Tests',
      percentage: '30%',
      description: 'Monthly subject-wise evaluations and comprehensive skill assessments',
      icon: '📊'
    },
    {
      step: 3,
      title: 'Annual Examination',
      percentage: '30%',
      description: 'Comprehensive year-end evaluation covering all subjects and skills',
      icon: '🎓'
    },
    {
      step: 4,
      title: 'Holistic Development',
      percentage: 'Bonus',
      description: 'Co-curricular activities, sports, arts, and community service evaluation',
      icon: '🌟'
    },
    {
      step: 5,
      title: 'Global Benchmarking',
      percentage: 'Analysis',
      description: 'International assessments and comparative performance analysis',
      icon: '🌍'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Academic/AcademicsImg7.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Academic <span className={`${currentTheme.primary}`}>Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive education programs designed to nurture critical thinking, creativity, and global competence
          </motion.p>
        </div>
      </section>

      {/* Academic Levels Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored curriculum for each stage of your child's educational journey
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 mb-2 md:mb-0 md:mx-2 ${
                  activeTab === tab.id
                    ? `${currentTheme.primaryBg} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-lg">{tab.label}</div>
                <div className="text-sm opacity-80">{tab.grades}</div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects[activeTab]?.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-transparent hover:border-current">
                    <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${subject.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{subject.icon}</span>
                    </div>
                    <h3 className={`text-xl font-bold ${currentTheme.primaryDark} mb-2 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                      {subject.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${i < Math.floor(subject.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{subject.rating}/5.0</span>
                    </div>
                    <button className={`text-sm ${currentTheme.primary} font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all duration-300`}>
                      <span>Learn More</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Teachers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Meet Our Teachers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class educators committed to nurturing every student's potential
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold ${currentTheme.primaryDark} mb-2 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                        {teacher.name}
                      </h3>
                      <p className={`${currentTheme.primary} font-semibold mb-2`}>
                        {teacher.subject}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">{teacher.qualification}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <User size={16} />
                          <span>{teacher.experience} experience</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 italic">
                        {teacher.specialization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Evaluation System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive assessment approach focusing on holistic development
            </p>
          </motion.div>

          <div className="relative">
            {evaluationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full`}>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-r ${currentTheme.gradient} rounded-2xl p-6 text-white ${index % 2 === 0 ? 'mr-8' : 'ml-8'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{step.percentage}</span>
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-12 h-12 ${currentTheme.primaryBg} rounded-full text-white font-bold text-lg shadow-lg`}>
                    {step.step}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;