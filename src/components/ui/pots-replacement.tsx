import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Wifi, Shield, Clock, DollarSign, Globe, CheckCircle2, Radio } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: "Major Cost Savings",
    items: [
      "Up to 70% cost savings over traditional phone lines",
      "Complete package includes connectivity, equipment, deployment and management"
    ]
  },
  {
    icon: Globe,
    title: "Broadest Reach",
    items: [
      "Wireless coverage across all major carriers",
      "Pre-qualification of 4G LTE coverage in your area",
      "Wireless offered as primary connectivity or backup option"
    ]
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    items: [
      "Complete service management and professional installation",
      "Managed equipment and break/fix support",
      "Remote firmware upgrades"
    ]
  },
  {
    icon: CheckCircle2,
    title: "Meet Compliance Objectives",
    items: [
      "Fully compliant with fire, e911 and life safety services codes",
      "Includes proactive monitoring and support"
    ]
  }
];

const solutions = [
  {
    icon: Phone,
    title: "Wired Voice/Fax",
    description: "Leverage your existing Ethernet network with our cost-effective wired POTS Replacement solution. Includes analog adapter supporting voice and fax lines.",
    elements: [
      "Bundled analog telephone adapter (2-48 ports)",
      "VoIP line with unlimited local calling",
      "DID including e911"
    ]
  },
  {
    icon: Radio,
    title: "Wireless Voice/Fax",
    description: "Cellular-based solution for reliable voice and fax communication.",
    elements: [
      "Integrated 4G LTE modem",
      "Two FXS ports for VoIP",
      "500 minutes of local calling"
    ]
  },
  {
    icon: Shield,
    title: "Emergency & Security",
    description: "Comprehensive solution for emergency voice lines and security systems.",
    elements: [
      "Dual cellular communicators",
      "Bundled backup battery",
      "24/7 monitoring services"
    ]
  },
  {
    icon: Wifi,
    title: "Fire Alarm Systems",
    description: "NFPA 72 compliant solution with redundant cellular connectivity.",
    elements: [
      "Primary & secondary cellular communicators",
      "Different carrier networks for redundancy",
      "Meets all Life and Safety Requirements"
    ]
  }
];

export function POTSReplacement() {
  return (
    <section className="py-32 relative overflow-hidden" id="pots">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/5 to-black" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">POTS Replacement</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-6">Reliable, Cost-effective Connectivity</p>
          <p className="text-lg text-white/60">
            As copper infrastructure becomes more expensive to maintain, telecommunication carriers are phasing out Plain Old Telephone Service (POTS) lines and transferring the costs to customers. We help you transition from legacy analog lines to reliable LTE cellular or VoIP connections, and save money.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl gradient-border hover-glow transition-all duration-500 glass-effect">
              <feature.icon className="w-12 h-12 mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-4 text-gradient">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-gradient">POTS Replacement for Every Use Case</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 rounded-2xl gradient-border hover-glow transition-all duration-500 glass-effect">
                <solution.icon className="w-12 h-12 mb-4 text-white/80" />
                <h4 className="text-xl font-semibold mb-4 text-gradient">{solution.title}</h4>
                <p className="text-white/70 mb-4 text-sm">{solution.description}</p>
                <ul className="space-y-2 text-left">
                  {solution.elements.map((element, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-white/40" />
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}