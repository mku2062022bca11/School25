import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  CreditCard,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Admission = () => {
  const { currentTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFeeType, setSelectedFeeType] = useState("indian");
  const [admissionContent, setAdmissionContent] = useState("");

  useEffect(() => {
    fetch("/content/admission.txt")
      .then((response) => response.text())
      .then((text) => setAdmissionContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Complete digital application form with required documents",
      icon: FileText,
      details: [
        "Fill application form",
        "Upload documents",
        "Pay processing fee",
      ],
    },
    {
      step: 2,
      title: "Entrance Assessment",
      description: "Age-appropriate aptitude test and personal interview",
      icon: Users,
      details: ["Aptitude test", "Student interview", "Portfolio review"],
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Verification of academic transcripts and certificates",
      icon: CheckCircle,
      details: [
        "Academic verification",
        "Medical certificate",
        "Character certificate",
      ],
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Merit-based selection and admission confirmation",
      icon: Award,
      details: ["Merit list", "Admission offer", "Fee payment"],
    },
  ];

  const feeStructure = {
    indian: {
      primary: "₹2,50,000",
      middle: "₹3,00,000",
      senior: "₹3,50,000",
    },
    nri: {
      primary: "$4,500",
      middle: "$5,200",
      senior: "$6,000",
    },
    foreign: {
      primary: "$6,000",
      middle: "$7,000",
      senior: "$8,500",
    },
  };

  const scholarships = [
    {
      title: "Academic Excellence Scholarship",
      amount: "Up to 50% fee waiver",
      criteria: "Outstanding academic performance",
      icon: Award,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Sports Scholarship",
      amount: "Up to 30% fee waiver",
      criteria: "National/International sports achievements",
      icon: Users,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Need-based Financial Aid",
      amount: "Up to 40% fee waiver",
      criteria: "Family income criteria",
      icon: CreditCard,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Sibling Discount",
      amount: "10% discount",
      criteria: "Second child admission",
      icon: Users,
      color: "from-purple-400 to-purple-600",
    },
  ];

  const admissionCalendar = [
    {
      date: "January 15",
      event: "Application process opens",
      status: "completed",
    },
    {
      date: "February 28",
      event: "Last date for application",
      status: "active",
    },
    {
      date: "March 15",
      event: "Entrance test and interviews",
      status: "upcoming",
    },
    {
      date: "April 15",
      event: "Final merit list announcement",
      status: "upcoming",
    },
    { date: "April 30", event: "Fee payment deadline", status: "upcoming" },
    {
      date: "May 15",
      event: "Document verification",
      status: "upcoming",
    },
    {
      date: "June 1",
      event: "New session orientation",
      status: "upcoming",
    },
    { date: "June 15", event: "Classes commence", status: "upcoming" },
  ];

  const downloadableResources = [
    {
      title: "Digital Prospectus",
      description: "Complete school information and programs",
      size: "15 MB",
      type: "PDF",
    },
    {
      title: "Admission Form",
      description: "Printable application form",
      size: "2 MB",
      type: "PDF",
    },
    {
      title: "Fee Structure Guide",
      description: "Detailed fee breakdown and payment options",
      size: "3 MB",
      type: "PDF",
    },
    {
      title: "Scholarship Guidelines",
      description: "Eligibility criteria and application process",
      size: "4 MB",
      type: "PDF",
    },
    {
      title: "Academic Calendar",
      description: "Important dates and school events",
      size: "1 MB",
      type: "PDF",
    },
    {
      title: "Parent Handbook",
      description: "School policies and procedures",
      size: "8 MB",
      type: "PDF",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('./Admission/AdmissionImg1.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Join <span className={`${currentTheme.primary}`}>OB365 School</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Begin your child's journey to global citizenship and academic
            excellence
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl`}
            style={{
              background: `linear-gradient(45deg, ${currentTheme.primaryBg.replace(
                "bg-",
                ""
              )}, ${currentTheme.primaryBg.replace("bg-", "")}dd)`,
              animation: "pulse 2s infinite",
            }}
          >
            Apply Now
          </motion.button>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and merit-based admission process designed
              for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setCurrentStep(step.step)}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  currentStep === step.step ? "scale-105" : "hover:scale-105"
                }`}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 ${
                    currentStep === step.step
                      ? `${currentTheme.border} shadow-2xl`
                      : "border-transparent hover:shadow-2xl"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      currentStep === step.step
                        ? currentTheme.primaryBg
                        : "bg-gray-100"
                    } rounded-full mb-4 transition-all duration-300`}
                  >
                    <step.icon
                      className={`${
                        currentStep === step.step
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                      size={28}
                    />
                  </div>
                  <div
                    className={`text-2xl font-bold ${currentTheme.primary} mb-2`}
                  >
                    Step {step.step}
                  </div>
                  <h3
                    className={`text-xl font-bold ${currentTheme.primaryDark} mb-3`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center space-x-2 text-sm text-gray-500"
                      >
                        <CheckCircle
                          className={`${currentTheme.primary} flex-shrink-0`}
                          size={16}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
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
              Fee Structure 2024-25
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with flexible payment options and scholarships
              available
            </p>
          </motion.div>

          {/* Fee Type Toggles */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {["indian", "nri", "foreign"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFeeType(type)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mx-1 ${
                    selectedFeeType === type
                      ? `${currentTheme.primaryBg} text-white shadow-lg transform scale-105`
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type === "indian"
                    ? "Indian Students"
                    : type === "nri"
                    ? "NRI Students"
                    : "Foreign Students"}
                </button>
              ))}
            </div>
          </div>

          {/* Fee Table */}
          <motion.div
            key={selectedFeeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <div
              className={`bg-gradient-to-r ${currentTheme.gradient} text-white p-6`}
            >
              <h3 className="text-2xl font-bold text-center">
                {selectedFeeType === "indian"
                  ? "Indian Students"
                  : selectedFeeType === "nri"
                  ? "NRI Students"
                  : "Foreign Students"}{" "}
                Fee Structure
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    level: "Primary School",
                    grades: "Grades 1-5",
                    fee: feeStructure[selectedFeeType].primary,
                  },
                  {
                    level: "Middle School",
                    grades: "Grades 6-8",
                    fee: feeStructure[selectedFeeType].middle,
                  },
                  {
                    level: "Senior School",
                    grades: "Grades 9-12",
                    fee: feeStructure[selectedFeeType].senior,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h4
                      className={`text-xl font-bold ${currentTheme.primaryDark} mb-2`}
                    >
                      {item.level}
                    </h4>
                    <p className="text-gray-600 mb-3">{item.grades}</p>
                    <div
                      className={`text-3xl font-bold ${currentTheme.primary}`}
                    >
                      {item.fee}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">per annum</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarships */}
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
              Scholarships Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting exceptional students with comprehensive scholarship
              programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${scholarship.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${scholarship.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <scholarship.icon className="text-white" size={24} />
                    </div>
                    <h3
                      className={`text-lg font-bold ${currentTheme.primaryDark} mb-2 group-hover:${currentTheme.primary} transition-colors duration-300`}
                    >
                      {scholarship.title}
                    </h3>
                    <div
                      className={`text-xl font-bold ${currentTheme.primary} mb-3`}
                    >
                      {scholarship.amount}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {scholarship.criteria}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Calendar */}
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
              Admission Calendar 2024-25
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and deadlines for the admission process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionCalendar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${
                    item.status === "completed"
                      ? "border-green-500"
                      : item.status === "active"
                      ? currentTheme.border
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar
                      className={`${
                        item.status === "completed"
                          ? "text-green-500"
                          : item.status === "active"
                          ? currentTheme.primary
                          : "text-gray-400"
                      }`}
                      size={20}
                    />
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : item.status === "active"
                          ? `${currentTheme.primaryBg.replace(
                              "bg-",
                              "bg-"
                            )}/10 ${currentTheme.primary}`
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status === "completed"
                        ? "Completed"
                        : item.status === "active"
                        ? "Active"
                        : "Upcoming"}
                    </span>
                  </div>
                  <div
                    className={`text-lg font-bold ${currentTheme.primary} mb-2`}
                  >
                    {item.date}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Zone */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Download Center</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access all admission-related documents and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <FileText
                      className={`${currentTheme.primary} group-hover:scale-110 transition-transform duration-300`}
                      size={24}
                    />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {resource.size}
                    </span>
                    <button
                      className={`${currentTheme.primaryBg} ${currentTheme.primaryHover} text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105`}
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </button>
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

export default Admission;
