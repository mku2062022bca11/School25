import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Youtube, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [contactContent, setContactContent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'admission',
    grade: '',
    message: '',
    contactMethod: 'email',
    bestTime: 'morning'
  });

  useEffect(() => {
    fetch('/content/contact.txt')
      .then(response => response.text())
      .then(text => setContactContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Education Avenue, Future City', 'Sector 45, Gurugram, Haryana 122018', 'India'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Main Reception: +91 98765 43210', 'Admissions: +91 98765 43211', 'Emergency: +91 98765 43215'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['General: info@zenithacademy.edu', 'Admissions: admissions@zenithacademy.edu', 'Academic: academics@zenithacademy.edu'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: 10:00 AM - 2:00 PM'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', handle: '@ZenithAcademyOfficial', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', handle: '@zenith_academy', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', handle: '@ZenithAcademy', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', handle: 'OB365 School Official', color: 'hover:text-red-600' }
  ];

  const departments = [
    { name: 'Admissions Team', head: 'Ms. Priya Sharma', email: 'priya.sharma@zenithacademy.edu' },
    { name: 'Academic Affairs', head: 'Dr. Michael Johnson', email: 'michael.johnson@zenithacademy.edu' },
    { name: 'International Programs', head: 'Ms. Elena Rodriguez', email: 'elena.rodriguez@zenithacademy.edu' },
    { name: 'Innovation & Labs', head: 'Dr. Raj Patel', email: 'raj.patel@zenithacademy.edu' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Contact/ContactImg1.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Contact <span className={`${currentTheme.primary}`}>Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with us to learn more about joining our global learning community
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${currentTheme.primaryDark} mb-4`}>Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with us for quick and personalized assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className={`text-xl font-bold ${currentTheme.primaryDark} mb-4 group-hover:${currentTheme.primary} transition-colors duration-300`}>
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
                <h3 className={`text-2xl font-bold ${currentTheme.primaryDark} mb-6`}>Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                      >
                        <option value="admission">Admission</option>
                        <option value="academics">Academics</option>
                        <option value="campus-visit">Campus Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Grade Level</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                    >
                      <option value="">Select Grade Level</option>
                      <option value="primary">Primary (Grades 1-5)</option>
                      <option value="middle">Middle School (Grades 6-8)</option>
                      <option value="senior">Senior School (Grades 9-12)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message/Query *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300 resize-none`}
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Best Time to Call</label>
                      <select
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${currentTheme.focus} focus:border-transparent transition-all duration-300`}
                      >
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full ${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-2xl`}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <img
                    src="./Contact/ContactImg2.jpeg"
                    alt="Campus Location Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p className="font-semibold">OB365 School Campus</p>
                      <p className="text-sm">Click to view in Maps</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h4 className={`text-xl font-bold ${currentTheme.primaryDark} mb-4`}>Department Contacts</h4>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-current transition-colors duration-300">
                      <h5 className={`font-semibold ${currentTheme.primaryDark}`}>{dept.name}</h5>
                      <p className="text-gray-600 text-sm">{dept.head}</p>
                      <p className={`text-sm ${currentTheme.primary}`}>{dept.email}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h4 className={`text-xl font-bold ${currentTheme.primaryDark} mb-4`}>Follow Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group ${social.color}`}>
                      <social.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <p className="font-semibold text-sm">{social.name}</p>
                        <p className="text-xs text-gray-500">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Codes */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h4 className={`text-xl font-bold ${currentTheme.primaryDark} mb-4`}>Quick Access</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-600">QR Code</span>
                    </div>
                    <p className="text-sm font-semibold">Mobile App</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-600">QR Code</span>
                    </div>
                    <p className="text-sm font-semibold">Parent WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Chat & Support */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our support team is here to assist you with any questions or concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <MessageCircle className={`${currentTheme.primary} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} size={48} />
                <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our support team in real-time</p>
                <button className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Start Chat
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Phone className={`${currentTheme.primary} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} size={48} />
                <h3 className="text-xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our admission counselors</p>
                <button className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Call Now
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Calendar className={`${currentTheme.primary} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} size={48} />
                <h3 className="text-xl font-bold mb-3">Schedule Visit</h3>
                <p className="text-gray-300 mb-4">Book a personalized campus tour</p>
                <button className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Book Tour
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;