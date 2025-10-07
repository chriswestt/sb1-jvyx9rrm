import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Star, Users, Globe, Shield, Clock, CheckCircle } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay at the forefront of technology to provide cutting-edge solutions that drive business transformation."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our solutions are built for 99.9% uptime with redundant systems and 24/7 monitoring."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients to understand their unique needs and deliver customized solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our team of certified professionals delivers exceptional service and support at every level."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Bryteside Technologies was established with a vision to transform business communications."
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched our AI solutions division to help businesses leverage artificial intelligence."
    },
    {
      year: "2023",
      title: "National Expansion",
      description: "Expanded our services nationwide, serving over 1000 satisfied customers."
    },
    {
      year: "2024",
      title: "Partnership Expansion",
      description: "Recognized as a leading provider of POTS replacement and business continuity solutions."
    },
    {
      year: "2025",
      title: "AT&T Alliance Partner",
      description: "Advanced to AT&T Alliance Partner status, providing enhanced enterprise solutions and nationwide coverage."
    }
  ];

  const team = [
    {
      name: "DJ Farak",
      role: "Chief Executive Officer",
      description: "30+ years in telecommunications and business technology solutions.",
      image: "/ArdavanPhoto.jpg"
    },
    {
      name: "Sarah Oppenheimer",
      role: "Chief Technology Officer",
      description: "Expert in AI solutions and network infrastructure with 15+ years experience.",
      image: "/marillyn-hewson-c521f257-b71f-4cef-9886-dab35473270-resize-750.webp"
    },
    {
      name: "Chris West",
      role: "Director of Business Development",
      description: "Specializes in business continuity and disaster recovery solutions.",
      image: "/CW_HeadShot.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">About Bryteside Technologies</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Transforming businesses through innovative technology solutions and strategic partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
            >
              <div className="p-8 bg-blue-50 rounded-lg">
                <Target className="w-12 h-12 mb-6 text-blue-600" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses with reliable, innovative telecommunications and IT solutions that drive growth, 
                  enhance productivity, and ensure business continuity in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="p-8 bg-blue-50 rounded-lg">
                <Star className="w-12 h-12 mb-6 text-blue-600" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading provider of intelligent business technology solutions, helping organizations 
                  seamlessly transition to the future of communications and artificial intelligence.
                </p>
              </div>
            </motion.div>

            {/* Company Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in 2018, Bryteside Technologies emerged from a simple observation: businesses were struggling 
                  with outdated telecommunications infrastructure that was becoming increasingly expensive and unreliable. 
                  As copper-based POTS lines faced phase-out, organizations needed a trusted partner to navigate the 
                  transition to modern, cost-effective solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  What started as a POTS replacement specialist has evolved into a comprehensive technology solutions 
                  provider. Today, we combine our telecommunications expertise with cutting-edge AI solutions, 
                  cybersecurity services, and managed IT support to deliver holistic business transformation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As an authorized AT&T Business Solutions partner, we leverage enterprise-grade infrastructure 
                  while maintaining the personalized service and agility that only a dedicated technology partner can provide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-6">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Leadership Team
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-48 h-48 rounded-full mx-auto mb-4 object-cover ${
                    member.name === 'DJ Farak' ? 'object-center' : 'object-top'
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our partnerships and certifications ensure we deliver the highest quality solutions
            </p>
            <div className="flex justify-center items-center">
              <img 
                src="/att_alliance_spbadge_rgb.png" 
                alt="AT&T Alliance Solution Provider" 
                className="h-40"
              />
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">AT&T Certified</h3>
                <p className="text-gray-600">Authorized AT&T Business Solutions Partner</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Security Certified</h3>
                <p className="text-gray-600">Certified in cybersecurity and compliance standards</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Specialized knowledge across multiple industries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}