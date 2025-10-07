import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const stats = [
    { number: '99.9%', label: 'Network Uptime' },
    { number: '24/7', label: 'Support Available' },
    { number: '70%', label: 'Cost Savings' },
    { number: '1000+', label: 'Satisfied Customers' }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'IT Director, Healthcare Systems',
      content: 'The POTS replacement solution saved us thousands while improving reliability. Their support team is exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Facilities Manager, Manufacturing Corp',
      content: 'Our fire safety systems are now more reliable than ever. The installation was seamless and professional.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Security Director, Retail Chain',
      content: 'Outstanding service and support. Our security systems have never been more dependable.',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Business Technology
              <motion.span 
                className="text-blue-600 block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Management
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Where Business Meets Intelligence
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center hover-scale hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover-scale hover:shadow-lg"
              >
                Learn More
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="text-gray-600 mb-4">Authorized Partner</p>
              <img 
                src="/att_alliance_spbadge_rgb.png" 
                alt="AT&T Alliance Solution Provider" 
                className="h-24 mx-auto hover-scale transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-lg hover:bg-white transition-all duration-300 hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Trusted AT&T Partner
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-8">
              As an authorized AT&T Business Solutions partner, we provide comprehensive telecommunications and IT solutions designed to keep your business connected and protected.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="text-center p-6 bg-blue-50 rounded-lg hover-scale transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Target className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-pulse-slow" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">To provide innovative telecommunications and IT solutions that drive business transformation and growth.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-blue-50 rounded-lg hover-scale transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce-slow" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Expertise</h3>
                <p className="text-gray-600">Decades of experience in telecommunications, networking, and digital transformation solutions.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-blue-50 rounded-lg hover-scale transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Star className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-spin-slow" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Commitment</h3>
                <p className="text-gray-600">24/7 support and cutting-edge innovation to ensure your business stays ahead of the curve.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover-scale transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse-slow" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-2xl mb-12 opacity-90 font-light">
              Contact us today to discuss your telecommunications and IT needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center hover-scale hover:shadow-lg animate-float"
              >
                Get In Touch
                <ArrowRight className="inline-block ml-2 animate-wiggle" />
              </Link>
              <a 
                href="https://calendly.com/chris-bryteside/bryteside-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center hover-scale hover:shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="inline-block ml-2 animate-wiggle" />
              </a>
              <a 
                href="tel:+17602070435"
                className="border-2 border-white text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center hover-scale hover:shadow-lg"
              >
                Call Us
                <ArrowRight className="inline-block ml-2 animate-wiggle" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}