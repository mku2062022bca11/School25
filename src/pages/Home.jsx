import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Award,
  Users,
  Globe,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Download,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [homeContent, setHomeContent] = useState("");

  useEffect(() => {
    fetch("/content/home.txt")
      .then((response) => response.text())
      .then((text) => setHomeContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const achievements = [
    { number: "2500+", label: "Students" },
    { number: "150+", label: "Teachers" },
    { number: "25+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
  ];

  const innovations = [
    {
      title: "AI-Powered Learning",
      description:
        "Students developed an AI tutoring system that adapts to individual learning patterns, winning the National Innovation Award 2024",
      image:
        "./Home/HomeImg1.jpeg",
    },
    {
      title: "Space Exploration Project",
      description:
        "Our students collaborated with NASA on a Mars simulation project, developing solutions for space agriculture",
      image: "./Home/HomeImg2.jpeg",
    },
    {
      title: "Green Energy Innovation",
      description:
        "Award-winning solar panel efficiency project by our senior students, increasing efficiency by 40%",
      image:
        "./Home/HomeImg3.jpeg",
    },
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Curriculum",
      description:
        "CBSE integrated with international best practices for comprehensive learning",
      image: "./Home/HomeImg4.jpeg",
    },
    {
      icon: Award,
      title: "Excellence in Innovation",
      description:
        "State-of-the-art labs and innovation centers fostering creativity and critical thinking",
      image:
        "./Home/HomeImg5.jpeg",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description:
        "Students from 25+ countries creating a truly global learning environment",
      image:
        "./Home/HomeImg6.jpeg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % innovations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + innovations.length) % innovations.length
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Home/HomeImg7.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Empowering Global Citizens
            <span
              className={`block ${currentTheme.primary} text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}
            >
              of Tomorrow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Where innovation meets education in a globally connected learning
            environment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105`}
            >
              <span>Explore Academics</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
              <Play size={20} />
              <span>Virtual Tour</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Counter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold ${currentTheme.primary} mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}
            >
              Student Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the groundbreaking projects and innovations created by
              our talented students
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {innovations.map((innovation, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img
                            src={innovation.image}
                            alt={innovation.title}
                            className="w-full h-64 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 flex items-center">
                          <div>
                            <h3
                              className={`text-2xl font-bold ${currentTheme.primaryDark} mb-4`}
                            >
                              {innovation.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {innovation.description}
                            </p>
                            <button
                              className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105`}
                            >
                              <span>Learn More</span>
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}
            >
              Why Choose OB365 School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the premier choice for global education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${currentTheme.primaryBg} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className="text-white" size={24} />
                    </div>
                    <h3
                      className={`text-xl font-bold ${currentTheme.primaryDark} mb-3 group-hover:${currentTheme.primary} transition-colors duration-300`}
                    >
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Panel */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Take the Next Step</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our global learning community? Explore these quick
              links to get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Calendar
                className={`${currentTheme.primary} mb-4 group-hover:scale-110 transition-transform duration-300`}
                size={32}
              />
              <h3 className="text-xl font-bold mb-3">Online Admission</h3>
              <p className="text-gray-300 mb-4">
                Start your journey with our streamlined online admission process
              </p>
              <button
                className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Apply Now</span>
                <ExternalLink size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Download
                className={`${currentTheme.primary} mb-4 group-hover:scale-110 transition-transform duration-300`}
                size={32}
              />
              <h3 className="text-xl font-bold mb-3">Digital Prospectus</h3>
              <p className="text-gray-300 mb-4">
                Download our comprehensive digital prospectus with all details
              </p>
              <button
                className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Download</span>
                <Download size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Play
                className={`${currentTheme.primary} mb-4 group-hover:scale-110 transition-transform duration-300`}
                size={32}
              />
              <h3 className="text-xl font-bold mb-3">Virtual Tour</h3>
              <p className="text-gray-300 mb-4">
                Experience our campus through immersive virtual reality tour
              </p>
              <button
                className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2`}
              >
                <span>Start Tour</span>
                <Play size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
