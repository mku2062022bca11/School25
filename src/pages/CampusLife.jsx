import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  MapPin,
  Utensils,
  Home,
  Dumbbell,
  Users,
  Clock,
  Star,
  Quote,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const CampusLife = () => {
  const { currentTheme } = useTheme();
  const [campusContent, setCampusContent] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    fetch("/content/campus-life.txt")
      .then((response) => response.text())
      .then((text) => setCampusContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const lifestylePanels = [
    {
      title: "Dining Excellence",
      icon: Utensils,
      description:
        "Multi-cuisine cafeteria serving healthy, nutritious meals with international food court",
      features: [
        "Organic salad bar",
        "Special dietary accommodations",
        "Nutrition counseling",
        "Student-run café",
      ],
      image:
        "./Campus/CampusImg1.jpeg",
    },
    {
      title: "Hostel Life",
      icon: Home,
      description:
        "Modern accommodation with 24/7 security, resident mentors, and diverse cultural community",
      features: [
        "Study halls",
        "Recreation areas",
        "25+ countries represented",
        "Weekend excursions",
      ],
      image: "./Campus/CampusImg2.jpeg",
    },
    {
      title: "Sports & Recreation",
      icon: Dumbbell,
      description:
        "Olympic-size facilities with professional coaching and comprehensive fitness programs",
      features: [
        "Swimming pool",
        "Multi-sport courts",
        "Professional coaching",
        "Annual sports festival",
      ],
      image: "./Campus/CampusImg3.jpeg",
    },
    {
      title: "Student Clubs",
      icon: Users,
      description:
        "Diverse clubs and societies fostering creativity, leadership, and community engagement",
      features: [
        "Science & Innovation Club",
        "Cultural Arts Club",
        "Environmental Club",
        "Entrepreneurship Cell",
      ],
      image:
        "./Campus/CampusImg4.jpeg",
    },
  ];

  const timelineEvents = [
    {
      time: "8:00 AM",
      event: "Morning Assembly & Mindfulness",
      icon: "🌅",
      description: "Start the day with meditation and community gathering",
    },
    {
      time: "8:30 AM",
      event: "Core Subject Learning",
      icon: "📚",
      description: "Interactive classroom sessions with expert teachers",
    },
    {
      time: "10:10 AM",
      event: "Healthy Break & Social Time",
      icon: "🥤",
      description: "Nutritious snacks and peer interaction",
    },
    {
      time: "12:10 PM",
      event: "Lunch & Cultural Exchange",
      icon: "🍽️",
      description: "International cuisine and cultural conversations",
    },
    {
      time: "1:00 PM",
      event: "Laboratory Sessions",
      icon: "🧪",
      description: "Hands-on experiments in state-of-the-art labs",
    },
    {
      time: "2:40 PM",
      event: "Club Activities",
      icon: "🎭",
      description: "Personal development through diverse clubs",
    },
    {
      time: "3:30 PM",
      event: "Sports & Wellness",
      icon: "⚽",
      description: "Physical fitness and team sports",
    },
    {
      time: "4:15 PM",
      event: "Study Support",
      icon: "📖",
      description: "Peer learning and academic assistance",
    },
    {
      time: "5:00 PM",
      event: "Reflection & Community",
      icon: "🤝",
      description: "End-of-day reflection and campus community time",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      grade: "Grade 12",
      country: "India",
      quote:
        "OB365 School has given me friends from around the world and prepared me for university in Canada. The global perspective I gained here is invaluable.",
      image:
        "./Campus/CampusImg5.jpeg",
      type: "student",
    },
    {
      name: "Maya Chen",
      grade: "Grade 11",
      country: "Singapore",
      quote:
        "The innovation labs here helped me develop my AI project that won the national science fair. The teachers really encourage creative thinking.",
      image:
        "./Campus/CampusImg6.jpeg",
      type: "student",
    },
    {
      name: "Fatima Al-Rashid",
      grade: "Grade 10",
      country: "UAE",
      quote:
        "I love how our teachers encourage us to think globally while staying connected to our roots. The cultural diversity here is amazing.",
      image: "./Campus/CampusImg7.jpeg",
      type: "student",
    },
    {
      name: "Mrs. Priyanka Sharma",
      relation: "Parent of Aarav, Grade 9",
      country: "India",
      quote:
        "The holistic development approach at Zenith has transformed my daughter into a confident global citizen. The teachers genuinely care about each child.",
      image:
        "./Campus/CampusImg8.jpeg",
      type: "parent",
    },
    {
      name: "Mr. James Wilson",
      relation: "Parent of Emma, Grade 8",
      country: "Australia",
      quote:
        "Excellent faculty, world-class facilities, and truly international environment. Worth every penny for the quality of education provided.",
      image:
        "./Campus/CampusImg9.jpeg",
      type: "parent",
    },
  ];

  const infrastructureStats = [
    { label: "Campus Area", value: "50 acres", icon: "🌳" },
    { label: "Built-up Area", value: "500,000 sq ft", icon: "🏢" },
    { label: "Wi-Fi Coverage", value: "100%", icon: "📡" },
    { label: "Science Labs", value: "15", icon: "🔬" },
    { label: "Computer Labs", value: "8", icon: "💻" },
    { label: "Library Books", value: "50,000+", icon: "📚" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 via-blue-900 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Campus/CampusImg10.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Campus <span className={`${currentTheme.primary}`}>& Life</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience vibrant campus life in a globally diverse,
            technologically advanced learning environment
          </motion.p>
        </div>
      </section>

      {/* Virtual Tour Section */}
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
              Virtual Campus Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our 50-acre smart campus through immersive 360° virtual
              reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="./Campus/CampusImg11.jpeg"
              alt="Campus Virtual Tour"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button
                className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white p-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group`}
              >
                <Play
                  size={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                360° Virtual Reality Tour
              </h3>
              <p className="text-gray-200">
                Experience our campus from anywhere in the world
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Panels */}
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
              Campus Lifestyle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class facilities designed for holistic development and
              comfortable living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {lifestylePanels.map((panel, index) => (
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
                      src={panel.image}
                      alt={panel.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 ${currentTheme.primaryBg} rounded-full group-hover:scale-110 transition-transform duration-300`}
                      >
                        <panel.icon className="text-white" size={24} />
                      </div>
                      <h3
                        className={`text-xl font-bold ${currentTheme.primaryDark} group-hover:${currentTheme.primary} transition-colors duration-300`}
                      >
                        {panel.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {panel.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {panel.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-500"
                        >
                          <div
                            className={`w-2 h-2 ${currentTheme.primaryBg} rounded-full`}
                          ></div>
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

      {/* Student Life Timeline */}
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
              A Day in Student Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a typical day from 8 AM to 5 PM in our vibrant campus
              community
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-2xl shadow-lg p-6 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="text-2xl">{event.icon}</div>
                      <div>
                        <div
                          className={`text-lg font-bold ${currentTheme.primary}`}
                        >
                          {event.time}
                        </div>
                        <h3
                          className={`text-xl font-bold ${currentTheme.primaryDark} group-hover:${currentTheme.primary} transition-colors duration-300`}
                        >
                          {event.event}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
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

      {/* Testimonial Wall */}
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
              Community Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students and parents about their OB365 School
              experience
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="flex items-center space-x-6 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h4
                    className={`text-xl font-bold ${currentTheme.primaryDark}`}
                  >
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className={`${currentTheme.primary} font-medium`}>
                    {testimonials[currentTestimonial].type === "student"
                      ? `${testimonials[currentTestimonial].grade} • ${testimonials[currentTestimonial].country}`
                      : `${testimonials[currentTestimonial].relation} • ${testimonials[currentTestimonial].country}`}
                  </p>
                </div>
                <Quote
                  className={`${currentTheme.primary} ml-auto`}
                  size={32}
                />
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? currentTheme.primaryBg
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Infrastructure Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class facilities supporting comprehensive education and
              campus life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {infrastructureStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div
                    className={`text-2xl font-bold ${currentTheme.primary} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
