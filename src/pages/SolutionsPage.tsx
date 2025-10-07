import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Building, CheckCircle, ArrowRight, Phone, Wifi, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolutionsPage() {
  const solutions = [
    {
      title: 'Fire & Life Safety',
      description: 'NFPA 72 compliant solutions with redundant cellular connectivity for critical safety systems.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: ['NFPA 72 Compliant', 'Dual Cellular Paths', 'Battery Backup', '24/7 Monitoring'],
      detailedDescription: 'Our fire and life safety solutions ensure your critical safety systems remain operational at all times. With NFPA 72 compliance and redundant cellular connectivity, you can trust that your fire alarm systems will function when needed most.',
      benefits: [
        'Meets all Life and Safety Requirements',
        'Redundant communication paths for reliability',
        'Professional installation and monitoring',
        'Compliance with local fire codes'
      ]
    },
    {
      title: 'Security Systems',
      description: 'Reliable connectivity for security and alarm systems with cellular backup solutions.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      features: ['Alarm Monitoring', 'Video Surveillance', 'Access Control', 'Emergency Response'],
      detailedDescription: 'Keep your security systems connected with our reliable cellular backup solutions. Whether it\'s alarm monitoring, video surveillance, or access control, we ensure your security infrastructure stays operational.',
      benefits: [
        'Uninterrupted security monitoring',
        'Cellular backup for primary connections',
        'Integration with existing security systems',
        'Real-time alerts and notifications'
      ]
    },
    {
      title: 'Business Continuity',
      description: 'Ensure business operations continue with redundant communication solutions.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      features: ['Disaster Recovery', 'Backup Communications', 'Failover Solutions', 'Business Continuity Planning'],
      detailedDescription: 'Minimize downtime and ensure business continuity with our comprehensive backup communication solutions. From disaster recovery to failover systems, we keep your business connected.',
      benefits: [
        'Minimized business downtime',
        'Automatic failover capabilities',
        'Comprehensive disaster recovery planning',
        'Multiple communication pathways'
      ]
    },
    {
      title: 'Healthcare Communications',
      description: 'Critical communication solutions for healthcare facilities with compliance and reliability focus.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      features: ['HIPAA Compliance', 'Emergency Communications', 'Nurse Call Systems', 'Patient Monitoring'],
      detailedDescription: 'Healthcare facilities require reliable, compliant communication systems. Our solutions ensure patient safety, regulatory compliance, and seamless communication between staff and systems.',
      benefits: [
        'HIPAA compliant communications',
        'Enhanced patient safety',
        'Reliable emergency communications',
        'Integration with medical systems'
      ]
    }
  ];

  const industries = [
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Comprehensive solutions for office buildings, retail centers, and commercial facilities.',
      applications: ['Fire Safety Systems', 'Security Monitoring', 'Building Automation', 'Emergency Communications']
    },
    {
      icon: Shield,
      title: 'Government & Public Safety',
      description: 'Secure, reliable communications for government facilities and public safety organizations.',
      applications: ['Emergency Services', 'Public Safety Communications', 'Government Buildings', 'Critical Infrastructure']
    },
    {
      icon: Users,
      title: 'Healthcare Facilities',
      description: 'Specialized solutions for hospitals, clinics, and healthcare organizations.',
      applications: ['Patient Monitoring', 'Nurse Call Systems', 'Emergency Communications', 'Medical Equipment Connectivity']
    },
    {
      icon: AlertTriangle,
      title: 'Industrial & Manufacturing',
      description: 'Robust solutions for industrial facilities and manufacturing operations.',
      applications: ['Safety Systems', 'Process Monitoring', 'Equipment Communications', 'Emergency Response']
    }
  ];

  const complianceStandards = [
    {
      standard: 'NFPA 72',
      description: 'National Fire Alarm and Signaling Code compliance for fire safety systems',
      icon: Shield
    },
    {
      standard: 'UL Listed',
      description: 'Underwriters Laboratories certified equipment and installations',
      icon: CheckCircle
    },
    {
      standard: 'FCC Part 68',
      description: 'Federal Communications Commission compliance for telecommunications equipment',
      icon: Phone
    },
    {
      standard: 'ADA Compliant',
      description: 'Americans with Disabilities Act compliance for accessibility requirements',
      icon: Users
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
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">Industry Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Specialized technology solutions for critical business applications
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From fire safety to security systems, we provide industry-specific solutions 
              that meet regulatory requirements and ensure business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Specialized Solutions
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {solutions.map((solution, index) => (
              <div key={index} className="group rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <p className="text-gray-600 mb-6 text-sm">{solution.detailedDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-600 text-sm">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <industry.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, i) => (
                      <li key={i} className="text-gray-600 text-sm">• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Compliance & Standards
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                <standard.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{standard.standard}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Why Choose Our Solutions?</h2>
            <p className="text-xl opacity-90">
              We understand the critical nature of your systems and provide solutions that never compromise on reliability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Mission Critical",
                description: "Solutions designed for life safety and critical operations"
              },
              {
                icon: CheckCircle,
                title: "Fully Compliant",
                description: "Meet all regulatory requirements and industry standards"
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description: "Round-the-clock monitoring and immediate response"
              },
              {
                icon: Wifi,
                title: "Redundant Systems",
                description: "Multiple communication paths for maximum reliability"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <feature.icon className="w-12 h-12 mb-4 mx-auto opacity-90" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Every organization has unique requirements. Let's discuss how we can create a solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Discuss Your Needs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://calendly.com/chris-bryteside/bryteside-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Request Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}