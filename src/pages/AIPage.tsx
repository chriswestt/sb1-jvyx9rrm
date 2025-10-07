import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Network, Cloud, Settings, Target, Shield, ArrowRight, CheckCircle, Cpu, Database, BarChart3, Workflow, Bot, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIPage() {
  const aiSolutions = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business objectives and digital transformation goals.",
      features: ["AI Readiness Assessment", "Strategic Roadmap Development", "ROI Analysis", "Change Management"],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms to automate processes, predict outcomes, and optimize decision-making.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "AI Infrastructure",
      description: "Scalable cloud-based AI platforms and infrastructure to support your machine learning workloads.",
      features: ["Cloud ML Platforms", "GPU Computing", "Data Pipeline Management", "Model Deployment"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and reduce manual intervention.",
      features: ["Robotic Process Automation", "Workflow Optimization", "Document Processing", "Task Automation"],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics and forecasting capabilities to anticipate trends and make data-driven decisions.",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Analytics", "Performance Optimization"],
      color: "from-green-500 to-yellow-500"
    },
    {
      icon: Shield,
      title: "AI Governance & Ethics",
      description: "Responsible AI implementation with proper governance, compliance, and ethical considerations.",
      features: ["AI Ethics Framework", "Bias Detection", "Compliance Monitoring", "Risk Management"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Medical Diagnosis Assistant",
      description: "AI-powered diagnostic tools that assist healthcare professionals in making accurate diagnoses.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      benefits: ["Improved Accuracy", "Faster Diagnosis", "Cost Reduction", "Better Patient Outcomes"]
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance",
      description: "Machine learning algorithms that predict equipment failures before they occur.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop",
      benefits: ["Reduced Downtime", "Lower Maintenance Costs", "Extended Equipment Life", "Improved Safety"]
    },
    {
      industry: "Finance",
      title: "Fraud Detection System",
      description: "Advanced AI models that detect fraudulent transactions in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      benefits: ["Real-time Detection", "Reduced False Positives", "Compliance Assurance", "Risk Mitigation"]
    },
    {
      industry: "Retail",
      title: "Customer Experience AI",
      description: "Personalized shopping experiences powered by machine learning and customer analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      benefits: ["Personalization", "Increased Sales", "Customer Retention", "Inventory Optimization"]
    }
  ];

  const aiProcess = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current processes and identify AI opportunities that align with your business goals."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive AI roadmap with clear milestones, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Proof of Concept",
      description: "Develop and test AI prototypes to validate concepts and demonstrate potential value."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Deploy AI solutions with proper integration, training, and change management support."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuously monitor, refine, and optimize AI systems for maximum performance and ROI."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">AI Solutions & Innovation</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
              Accelerate your digital transformation with cutting-edge artificial intelligence
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">
              Our AI solutions help organizations harness the power of artificial intelligence to drive innovation, 
              optimize operations, and create competitive advantages in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started with AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://calendly.com/chris-bryteside/bryteside-call"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive AI Solutions
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {aiSolutions.map((solution, index) => (
              <div key={index} className="group p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our AI Implementation Process
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {aiProcess.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            AI Success Stories
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {useCases.map((useCase, index) => (
              <div key={index} className="group rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 font-semibold text-sm mb-2">{useCase.industry}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="text-gray-600 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Why Choose AI with Bryteside?</h2>
            <p className="text-xl opacity-90">
              We combine deep technical expertise with business acumen to deliver AI solutions that drive real results
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
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "Stay ahead with cutting-edge AI technologies and methodologies"
              },
              {
                icon: Target,
                title: "Business-Centric",
                description: "AI solutions designed to solve real business problems and drive ROI"
              },
              {
                icon: Shield,
                title: "Ethical AI",
                description: "Responsible AI development with proper governance and compliance"
              },
              {
                icon: Bot,
                title: "End-to-End Support",
                description: "From strategy to implementation and ongoing optimization"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <benefit.icon className="w-12 h-12 mb-4 mx-auto opacity-90" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to Transform with AI?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's discuss how AI can revolutionize your business operations and drive competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://calendly.com/chris-bryteside/bryteside-call?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Download AI Guide
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}