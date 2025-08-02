import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme, setTheme, currentTheme } = useTheme();

  const themeColors = [
    { name: "green", color: "bg-green-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "purple", color: "bg-purple-500" },
    { name: "red", color: "bg-red-500" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className={`h-8 w-8 ${currentTheme.primary}`} />
              <span className="text-xl font-bold">OB365 School</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering global citizens of tomorrow through innovative
              education, cutting-edge technology, and inclusive values.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/admission"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Admission
              </a>
              <a
                href="/academics"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Academics
              </a>
              <a
                href="/campus-life"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Campus Life
              </a>
              <a
                href="/events"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Events
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <div className="space-y-2">
              <a
                href="/global-curriculum"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Global Curriculum
              </a>
              <a
                href="/innovation"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Innovation Labs
              </a>
              <span className="text-gray-400 block">CBSE Board</span>
              <span className="text-gray-400 block">International Program</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  123 Education Avenue, Future City, FC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  info@zenithacademy.edu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OB365 School. All rights reserved.
          </p>

          {/* Theme Switcher */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Theme:</span>
            <div className="flex space-x-2">
              {themeColors.map((themeColor) => (
                <motion.button
                  key={themeColor.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setTheme(themeColor.name)}
                  className={`w-6 h-6 rounded-full ${themeColor.color} ${
                    theme === themeColor.name
                      ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
