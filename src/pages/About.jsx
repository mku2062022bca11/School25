import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Award, Globe2, Target, Eye, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { currentTheme } = useTheme();
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    fetch("/content/about.txt")
      .then((response) => response.text())
      .then((text) => setAboutContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "OB365 School established with a vision to revolutionize education",
      image: "./About/AboutImg1.jpeg",
    },
    {
      year: "2012",
      title: "First International Partnership",
      description: "Collaboration with Cambridge Assessment International",
      image: "./About/AboutImg2.jpeg",
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Launch of smart classrooms and digital learning platforms",
      image: "./About/AboutImg3.jpeg",
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Sister schools established in Singapore and Dubai",
      image: "./About/AboutImg4.jpeg",
    },
    {
      year: "2020",
      title: "Virtual Learning Pioneer",
      description: "Leading the way in hybrid education models",
      image: "./About/AboutImg5.jpeg",
    },
    {
      year: "2022",
      title: "Innovation Center Launch",
      description: "State-of-the-art AI & Robotics lab inauguration",
      image: "./About/AboutImg6.jpeg",
    },
    {
      year: "2024",
      title: "Sustainability Champion",
      description: "Carbon-neutral campus achievement",
      image: "./About/AboutImg7.jpeg",
    },
  ];

  const partnerships = [
    { country: "United States", partnership: "MIT STEM Programs", flag: "🇺🇸" },
    {
      country: "United Kingdom",
      partnership: "Cambridge Assessment",
      flag: "🇬🇧",
    },
    { country: "Singapore", partnership: "NUS Collaboration", flag: "🇸🇬" },
    {
      country: "Australia",
      partnership: "University of Melbourne",
      flag: "🇦🇺",
    },
    { country: "Canada", partnership: "McGill Exchange Programs", flag: "🇨🇦" },
    { country: "Germany", partnership: "Max Planck Institute", flag: "🇩🇪" },
    { country: "Japan", partnership: "Tokyo Tech Robotics", flag: "🇯🇵" },
    {
      country: "South Korea",
      partnership: "Seoul National University",
      flag: "🇰🇷",
    },
  ];

  const leaders = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Principal",
      quote:
        "At OB365 School, we don't just prepare students for the future - we empower them to create it.",
      image: "./About/AboutImg8.jpeg",
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Chairperson",
      quote:
        "Our commitment to global excellence and local values creates leaders who can bridge cultures and innovate across boundaries.",
      image: "./About/AboutImg9.jpeg",
    },
    {
      name: "Prof. Elena Rodriguez",
      position: "Global Mentor",
      quote:
        "Every student at Zenith is a global citizen in the making, equipped with knowledge, empathy, and the courage to make a difference.",
      image: "./About/AboutImg10.jpeg",
    },
  ];

  const [currentLeader, setCurrentLeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % leaders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Fostering creativity and out-of-the-box thinking in every aspect of learning",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Globe2,
      title: "Global Citizenship",
      description:
        "Developing cultural awareness and international perspective in our students",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Pursuing the highest standards in academics, character, and personal growth",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Building character and ethical leadership through value-based education",
      color: "from-red-400 to-red-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together across cultures and disciplines to achieve common goals",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Eye,
      title: "Sustainability",
      description:
        "Creating environmentally conscious global citizens for a better tomorrow",
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./About/AboutImg11.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About{" "}
            <span className={`${currentTheme.primary}`}>OB365 School</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of education through innovation, global
            collaboration, and unwavering commitment to excellence
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}
            >
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global recognition - the OB365 School
              story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-2xl shadow-lg p-6 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div
                          className={`text-2xl font-bold ${currentTheme.primary}`}
                        >
                          {item.year}
                        </div>
                        <h3
                          className={`text-xl font-bold ${currentTheme.primaryDark}`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${currentTheme.primaryBg} rounded-full border-4 border-white shadow-lg`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}
            >
              Global Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with world-renowned institutions to provide the best
              education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partnership.flag}
                </div>
                <h3
                  className={`text-lg font-bold ${currentTheme.primaryDark} mb-2`}
                >
                  {partnership.country}
                </h3>
                <p className="text-gray-600 text-sm">
                  {partnership.partnership}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quotes Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}
            >
              Leadership Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights from our visionary leaders who guide OB365 School's
              mission
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentLeader}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <img
                src={leaders[currentLeader].image}
                alt={leaders[currentLeader].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{leaders[currentLeader].quote}"
              </blockquote>
              <div>
                <h4 className={`text-xl font-bold ${currentTheme.primaryDark}`}>
                  {leaders[currentLeader].name}
                </h4>
                <p className={`${currentTheme.primary} font-medium`}>
                  {leaders[currentLeader].position}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-8">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLeader(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentLeader
                      ? currentTheme.primaryBg
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center lg:text-left"
            >
              <h3 className={`text-3xl font-bold ${currentTheme.primary} mb-6`}>
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To nurture globally competent, innovative, and ethical leaders
                who will shape a better tomorrow through knowledge, creativity,
                and compassion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center lg:text-right"
            >
              <h3 className={`text-3xl font-bold ${currentTheme.primary} mb-6`}>
                Our Vision
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the world's leading institution that seamlessly blends
                academic excellence with character development, preparing
                students to thrive in an interconnected world.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental principles that guide everything we do at OB365
              School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${currentTheme.primaryBg} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
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

export default About;
