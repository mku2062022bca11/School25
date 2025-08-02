import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Play,
  Download,
  ExternalLink,
  Filter,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Events = () => {
  const { currentTheme } = useTheme();
  const [eventsContent, setEventsContent] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    fetch("/content/events.txt")
      .then((response) => response.text())
      .then((text) => setEventsContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const upcomingEvents = [
    {
      title: "Zenith Global Summit 2024",
      date: "December 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      category: "conference",
      description:
        'International student conference with theme "Shaping Tomorrow\'s Leaders"',
      participants: "1000+",
      image:
        "./Events/EventsImg1.jpeg",
      featured: true,
    },
    {
      title: "Winter Concert 2024",
      date: "December 20, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Performing Arts Center",
      category: "cultural",
      description:
        "Musical performances by student orchestra and cultural groups",
      participants: "500",
      image:
        "./Events/EventsImg2.jpeg",
    },
    {
      title: "Science Exhibition",
      date: "December 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Labs",
      category: "academic",
      description: "Student innovation showcase and scientific demonstrations",
      participants: "300",
      image:
        "./Events/EventsImg3.jpeg",
    },
    {
      title: "Inter-school Debate Championship",
      date: "January 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      category: "competition",
      description: "Regional debate competition with 20+ participating schools",
      participants: "200",
      image:
        "./Events/EventsImg4.jpeg",
    },
    {
      title: "Annual Sports Day",
      date: "February 28, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "sports",
      description:
        "Athletic competitions, team events, and sports celebrations",
      participants: "800",
      image: "./Events/EventsImg5.jpeg",
    },
    {
      title: "Innovation Challenge",
      date: "February 14, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Innovation Hub",
      category: "competition",
      description: "Student startup pitch competition with industry judges",
      participants: "150",
      image:
        "./Events/EventsImg6.jpeg",
    },
  ];

  const newsHeadlines = [
    "Zenith Students Win National AI Competition - Team develops revolutionary learning app",
    "International Partnership Signed - Collaboration with Oxford University announced",
    "Space Project Success - Student satellite reaches orbit successfully",
    "Cultural Excellence - Drama club wins state-level theater competition",
    "Innovation Grant Received - ₹1 crore funding for renewable energy research",
    "Academic Achievement - 100% pass rate in international assessments",
  ];

  const mediaHighlights = [
    {
      title: "Day in the Life at Zenith Academy",
      type: "Documentary",
      duration: "15:30",
      thumbnail:
        "./Events/EventsImg7.jpeg",
      views: "25K",
    },
    {
      title: "Global Classroom Connection",
      type: "Live Session",
      duration: "45:20",
      thumbnail:
        "./Events/EventsImg8.jpeg",
      views: "12K",
    },
    {
      title: "Innovation Lab Tour",
      type: "Behind the Scenes",
      duration: "8:45",
      thumbnail:
        "./Events/EventsImg9.jpeg",
      views: "18K",
    },
    {
      title: "Cultural Festival 2024",
      type: "Event Highlights",
      duration: "12:15",
      thumbnail:
        "./Events/EventsImg10.jpeg",
      views: "30K",
    },
    {
      title: "Sports Championship Victory",
      type: "Competition",
      duration: "6:30",
      thumbnail:
        "./Events/EventsImg11.jpeg",
      views: "22K",
    },
    {
      title: "Alumni Success Stories",
      type: "Interview Series",
      duration: "20:10",
      thumbnail:
        "./Events/EventsImg12.jpeg",
      views: "15K",
    },
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "academic", label: "Academic" },
    { id: "cultural", label: "Cultural" },
    { id: "sports", label: "Sports" },
    { id: "competition", label: "Competitions" },
    { id: "conference", label: "Conferences" },
  ];

  const filteredEvents =
    selectedFilter === "all"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === selectedFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Calculate countdown for featured event
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-15T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Events/EventsImg13.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Events <span className={`${currentTheme.primary}`}>& News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay updated with the latest happenings, achievements, and upcoming
            events at Zenith Academy
          </motion.p>
        </div>
      </section>

      {/* Live News Ticker */}
      <section
        className={`py-4 ${currentTheme.primaryBg} text-white overflow-hidden`}
      >
        <div className="flex items-center">
          <div className="bg-white/20 px-4 py-2 rounded-r-full">
            <span className="font-bold">LATEST NEWS</span>
          </div>
          <div className="flex-1 ml-4">
            <motion.div
              key={currentNewsIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="text-white/90"
            >
              🔥 {newsHeadlines[currentNewsIndex]}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Event Countdown */}
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
              Next Major Event
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for our biggest event of the year - Zenith Global Summit
              2024
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src=" ./Events/EventsImg14.jpeg"
                alt="Zenith Global Summit"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3
                  className={`text-3xl font-bold ${currentTheme.primaryDark} mb-4`}
                >
                  Zenith Global Summit 2024
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Theme: "Shaping Tomorrow's Leaders" - International student
                  conference with 1000+ participants from 15 countries
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((unit, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${currentTheme.gradient} rounded-2xl p-4 text-white text-center`}
                  >
                    <div className="text-2xl md:text-3xl font-bold">
                      {unit.value}
                    </div>
                    <div className="text-sm opacity-80">{unit.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105`}
                >
                  <Calendar size={20} />
                  <span>Register Now</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Event Details</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting events, competitions, and activities happening
              at our campus
            </p>
          </motion.div>

          {/* Event Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? `${currentTheme.primaryBg} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    event.featured ? "ring-2 " + currentTheme.border : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${currentTheme.primaryBg} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}
                      </span>
                    </div>
                    {event.featured && (
                      <div className="absolute top-4 right-4">
                        <Award className="text-yellow-400" size={24} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold ${currentTheme.primaryDark} mb-3 group-hover:${currentTheme.primary} transition-colors duration-300`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Users size={16} />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                    <button
                      className={`w-full ${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights */}
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
              Media Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our latest video content showcasing campus life,
              achievements, and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaHighlights.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white" size={48} />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs ${currentTheme.primary} font-semibold px-2 py-1 bg-gray-100 rounded-full`}
                      >
                        {video.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {video.views} views
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-bold ${currentTheme.primaryDark} group-hover:${currentTheme.primary} transition-colors duration-300`}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Magazine Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Zenith Horizons Digital Magazine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our monthly digital publication featuring student
              achievements, faculty insights, and campus updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative">
                <img
                  src="./Events/EventsImg15.jpeg"
                  alt="Digital Magazine"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
                  <button
                    className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white p-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300`}
                  >
                    <ExternalLink size={32} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                Latest Issue Highlights:
              </h3>
              <div className="space-y-4">
                {[
                  "Cover Story: Students Leading Climate Action",
                  "Feature: From Classroom to Silicon Valley - Alumni Success",
                  "Student Spotlight: Young Entrepreneur Launches EdTech Startup",
                  "Faculty Feature: AI in Education - A Teacher's Perspective",
                  "Sports: Championship Journey of Our Basketball Team",
                  "Art Gallery: Creative Expressions from Around the World",
                ].map((article, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 ${currentTheme.primaryBg} rounded-full`}
                    ></div>
                    <span className="text-gray-300">{article}</span>
                  </div>
                ))}
              </div>
              <button
                className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105`}
              >
                <Download size={20} />
                <span>Read Full Issue</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
