import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Network, Cloud, Shield, Headphones, Building, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    { 
      icon: Phone, 
      title: 'POTS Replacement', 
      description: 'Replace legacy copper lines with reliable cellular and VoIP solutions. Save up to 70% on telecommunications costs.',
      features: ['Cellular Backup', 'VoIP Integration', 'E911 Compliance', '24/7 Monitoring'],
      detailedDescription: 'As copper infrastructure becomes more expensive to maintain, telecommunication carriers are phasing out Plain Old Telephone Service (POTS) lines. Our POTS replacement solutions provide reliable, cost-effective alternatives using cellular and VoIP technologies.',
      benefits: ['Up to 70% cost savings', 'Improved reliability', 'Future-proof technology', 'Seamless migration']
    },
    { 
      icon: Zap, 
      title: 'Artificial Intelligence', 
      description: 'AI-powered solutions to optimize business operations, enhance customer experiences, and drive intelligent automation.',
      features: ['Machine Learning', 'Predictive Analytics', 'Process Automation', 'Data Intelligence'],
      detailedDescription: 'Harness the power of artificial intelligence to transform your business operations. Our AI solutions help organizations automate processes, gain insights from data, and make intelligent decisions.',
      benefits: ['Increased efficiency', 'Better decision making', 'Competitive advantage', 'Scalable solutions']
    },
    { 
      icon: Network, 
      title: 'Network Solutions', 
      description: 'Enterprise-grade networking infrastructure with redundant connectivity and managed services.',
      features: ['SD-WAN', 'MPLS Networks', 'Internet Services', 'Network Security'],
      detailedDescription: 'Build a robust network infrastructure that supports your business growth. Our network solutions provide reliable, secure, and scalable connectivity for organizations of all sizes.',
      benefits: ['High availability', 'Scalable bandwidth', 'Enhanced security', 'Centralized management']
    },
    { 
      icon: Cloud, 
      title: 'Cloud Services', 
      description: 'Scalable cloud infrastructure and migration services powered by leading cloud providers.',
      features: ['Cloud Migration', 'Hybrid Solutions', 'Disaster Recovery', 'Data Backup'],
      detailedDescription: 'Modernize your IT infrastructure with cloud services that provide flexibility, scalability, and cost-effectiveness. We help organizations migrate to and optimize their cloud environments.',
      benefits: ['Reduced IT costs', 'Improved scalability', 'Enhanced collaboration', 'Business continuity']
    },
    { 
      icon: Shield, 
      title: 'Cybersecurity', 
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: ['Threat Detection', 'Security Assessment', 'Compliance Management', 'Incident Response'],
      detailedDescription: 'Protect your organization from cyber threats with our comprehensive security solutions. We provide multi-layered protection, continuous monitoring, and rapid incident response.',
      benefits: ['Threat protection', 'Compliance assurance', 'Risk mitigation', 'Peace of mind']
    },
    { 
      icon: Headphones, 
      title: 'Managed Services', 
      description: '24/7 monitoring and management of your IT infrastructure with proactive support.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Performance Optimization', 'Help Desk'],
      detailedDescription: 'Focus on your core business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to keep your systems running smoothly.',
      benefits: ['Reduced downtime', 'Predictable costs', 'Expert support', 'Improved performance']
    }
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your current infrastructure and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Planning",
      description: "Develop a comprehensive strategy tailored to your business needs and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy solutions with minimal disruption to your business operations."
    },
    {
      step: "04",
      title: "Support",
      description: "Provide ongoing monitoring, maintenance, and support for optimal performance."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Comprehensive technology solutions designed to transform your business
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From POTS replacement to AI solutions, we provide the technology infrastructure 
              and expertise your business needs to thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative w-16 h-16 mb-6">
                  <service.icon className="w-16 h-16 text-blue-600 transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-2 text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-600 text-sm">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Service Process
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {serviceProcess.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Why Choose Our Services?</h2>
            <p className="text-xl opacity-90">
              We combine technical expertise with business understanding to deliver solutions that drive results
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
                title: "Proven Reliability",
                description: "99.9% uptime guarantee with redundant systems"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock monitoring and technical support"
              },
              {
                icon: Building,
                title: "Enterprise Grade",
                description: "Solutions designed for mission-critical operations"
              },
              {
                icon: CheckCircle,
                title: "Compliance Ready",
                description: "Meet industry standards and regulatory requirements"
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <highlight.icon className="w-12 h-12 mb-4 mx-auto opacity-90" />
                <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
                <p className="opacity-80">{highlight.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://calendly.com/chris-bryteside/bryteside-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}