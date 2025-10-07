import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '../ui/tubelight-navbar';
import { Footerdemo } from '../ui/footer-section';
import { Home, User, Zap, Settings, Target, Mail as MailIcon, Circle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'AI Solutions', url: '/ai-solutions', icon: Zap },
    { name: 'Services', url: '/services', icon: Settings },
    { name: 'Solutions', url: '/solutions', icon: Target },
    { name: 'Contact', url: '/contact', icon: MailIcon }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Bryteside Technologies Logo */}
      <div className="fixed top-4 left-6 z-50">
        <motion.div 
          className="flex items-center justify-center bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-gray-200 hover-scale transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, shadow: "0 10px 25px rgba(0,0,0,0.1)" }}
        >
          <div className="relative mr-2">
            <div className="relative w-6 h-6">
              {/* Main circuit ring */}
              <Circle className="w-6 h-6 text-blue-600 animate-pulse" strokeWidth={1.5} />
              
              {/* Outer data pulse ring */}
              <Circle className="absolute inset-0 w-6 h-6 text-blue-400 animate-ping opacity-30" strokeWidth={1} />
              
              {/* Central processor core */}
              <div className="absolute inset-2 w-2 h-2 bg-blue-600 rounded-sm animate-pulse opacity-80" />
              
              {/* Data flow indicators - top */}
              <div className="absolute top-0 left-1/2 w-0.5 h-1 bg-blue-500 animate-bounce opacity-70 transform -translate-x-1/2" />
              
              {/* Data flow indicators - bottom */}
              <div 
                className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-blue-500 animate-bounce opacity-70 transform -translate-x-1/2" 
                style={{ animationDelay: '0.5s' }} 
              />
              
              {/* Data flow indicators - left */}
              <div 
                className="absolute left-0 top-1/2 w-1 h-0.5 bg-blue-500 animate-bounce opacity-70 transform -translate-y-1/2" 
                style={{ animationDelay: '0.25s' }} 
              />
              
              {/* Data flow indicators - right */}
              <div 
                className="absolute right-0 top-1/2 w-1 h-0.5 bg-blue-500 animate-bounce opacity-70 transform -translate-y-1/2" 
                style={{ animationDelay: '0.75s' }} 
              />
              
              {/* Circuit connection points */}
              <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-60" />
              <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-60" />
              <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-60" />
              <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-60" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900">Bryteside</span>
            <span className="text-xs text-gray-600 ml-1">Technologies</span>
          </div>
        </motion.div>
      </div>
      
      <NavBar items={navItems} className="mt-20" />
      
      <main className="pt-32">
        {children}
      </main>
      
      <Footerdemo />
    </div>
  );
}