"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu, X, ArrowRight, Code, Users, Zap, CheckCircle } from "lucide-react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Mock Interviews",
      description: "Practice with realistic interview scenarios tailored to your experience level",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "AI Feedback",
      description: "Get instant, detailed feedback on your performance to improve faster",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Technical Challenges",
      description: "Solve coding problems and system design questions with real-time guidance",
      icon: <Code className="h-6 w-6" />,
    },
  ]

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 ${scrollY > 50 ? (darkMode ? "bg-gray-900/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md shadow-sm") : "bg-transparent"} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <motion.div
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-xl mr-1"
                >
                  Mock
                </motion.div>
                <motion.div
                  initial={{ rotate: 10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`font-bold text-xl ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                >
                  Mitra
                </motion.div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#features"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                >
                  How It Works
                </Link>
                <Link
                  href="#pricing"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link
                href="/dashboard"
                className={`hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} text-white transition-colors`}
              >
                Get Started
              </Link>
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className={`p-2 rounded-md ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                  aria-label="Open menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"} shadow-lg`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} text-white transition-colors mt-4`}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${darkMode ? "bg-purple-900/40 text-purple-300" : "bg-purple-100 text-purple-600"}`}
              >
                Ace Your Next Interview
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Practice Makes Perfect with{" "}
                <span className={darkMode ? "text-purple-400" : "text-purple-600"}>MockMitra</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Elevate your interview skills with AI-powered mock interviews, personalized feedback, and expert
                coaching.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/signup"
                  className={`px-6 py-3 rounded-lg text-white font-medium ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} transition-colors flex items-center justify-center gap-2`}
                >
                  Start Practicing <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo"
                  className={`px-6 py-3 rounded-lg font-medium ${darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900"} transition-colors flex items-center justify-center`}
                >
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 rounded-2xl ${darkMode ? "bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl" : "bg-gradient-to-br from-purple-200 to-blue-200 blur-xl"}`}
              ></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="MockMitra Interview Platform"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className={`absolute top-20 left-10 w-72 h-72 rounded-full ${darkMode ? "bg-purple-600/10" : "bg-purple-200/40"} blur-3xl`}
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
            className={`absolute bottom-20 right-10 w-80 h-80 rounded-full ${darkMode ? "bg-blue-600/10" : "bg-blue-200/40"} blur-3xl`}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}
              >
                10,000+
              </motion.p>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Users</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}
              >
                50,000+
              </motion.p>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Interviews</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}
              >
                95%
              </motion.p>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Success Rate</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}
              >
                200+
              </motion.p>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Companies</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose <span className={darkMode ? "text-purple-400" : "text-purple-600"}>MockMitra</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Our platform is designed to help you prepare for interviews with confidence
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-800 hover:bg-gray-800/80" : "bg-white hover:bg-gray-50"} shadow-lg transition-colors duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${darkMode ? "bg-purple-900/50 text-purple-400" : "bg-purple-100 text-purple-600"}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-16 md:py-24 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Get started in just a few simple steps
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up and tell us about your experience and the roles you're targeting",
              },
              {
                step: "2",
                title: "Schedule Practice",
                description: "Book mock interviews based on your availability and interview type",
              },
              {
                step: "3",
                title: "Get Feedback",
                description: "Receive detailed feedback and actionable insights to improve",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-xl font-bold ${darkMode ? "bg-purple-600 text-white" : "bg-purple-500 text-white"}`}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Hear from our users who landed their dream jobs
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                role: "Software Engineer at Google",
                quote:
                  "MockMitra's technical interview practice was exactly what I needed to prepare for my Google interview. The feedback was spot-on!",
              },
              {
                name: "Rahul M.",
                role: "Product Manager at Amazon",
                quote:
                  "After 5 practice sessions on MockMitra, I felt so confident going into my interviews. I received an offer from my dream company!",
              },
              {
                name: "Ananya K.",
                role: "Data Scientist at Microsoft",
                quote:
                  "The AI feedback helped me identify my weak points and improve rapidly. I couldn't have prepared better any other way.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${darkMode ? "bg-purple-900/50" : "bg-purple-100"} flex items-center justify-center mr-4`}
                  >
                    <span className={`text-xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{testimonial.role}</p>
                  </div>
                </div>
                <p className={`italic ${darkMode ? "text-gray-300" : "text-gray-700"}`}>"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 md:py-24 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 md:p-12 rounded-2xl ${darkMode ? "bg-gradient-to-br from-purple-900/40 to-gray-900" : "bg-gradient-to-br from-purple-100 to-white"} shadow-xl text-center md:text-left`}
          >
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ace your next interview?</h2>
                <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
                  Join thousands of professionals who have transformed their interview skills with MockMitra.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Unlimited mock interviews",
                    "Personalized feedback",
                    "Industry-specific questions",
                    "24/7 access",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <CheckCircle className={`h-5 w-5 mr-2 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col space-y-4"
              >
                <Link
                  href="/signup"
                  className={`px-8 py-4 rounded-lg text-white font-medium text-center ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} transition-colors flex items-center justify-center gap-2`}
                >
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} text-center`}>
                  No credit card required
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${darkMode ? "bg-gray-900" : "bg-white"} border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MockMitra</h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li>
                  <Link href="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li>
                  <Link href="/guides" className="hover:underline">
                    Interview Guides
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="hover:underline">
                    Tips & Tricks
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:underline">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`pt-8 mt-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"} flex flex-col md:flex-row justify-between items-center`}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="font-bold text-xl mr-1">Mock</span>
                <span className={`font-bold text-xl ${darkMode ? "text-purple-400" : "text-purple-600"}`}>Mitra</span>
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className={darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className={darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                className={darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              &copy; {new Date().getFullYear()} MockMitra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
