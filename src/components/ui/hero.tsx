"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { Spotlight } from "./spotlight"

interface HeroProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: Array<{
    label: string;
    href: string;
    variant?: "default" | "outline";
    external?: boolean;
  }>;
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black",
          className,
        )}
        {...props}
      >
        <Spotlight className="left-0 top-0" />
        
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4"
          style={{ perspective: '1000px' }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-text-glow",
                "bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40",
                "transform-gpu transition-all duration-500",
                titleClassName,
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-white/60",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex gap-4", actionsClassName)}>
                {actions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-glow",
                      action.variant === "outline"
                        ? "gradient-border bg-black"
                        : "bg-white/5 glass-effect hover:bg-white/10"
                    )}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }