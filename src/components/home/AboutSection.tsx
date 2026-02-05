"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Building } from "lucide-react";

const stats = [
  { value: "35+", label: "Years of Service", icon: Award },
  { value: "500+", label: "Facilities Served", icon: Building },
  { value: "50+", label: "Team Members", icon: Users },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/pharmacist-consultation.jpg"
                alt="Pharmacy team consultation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border/50 hidden md:block">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              About East Bay Pharmacy
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A Legacy of <span className="text-gradient-brand">Trusted Care</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 1985, East Bay Pharmacy has been the trusted pharmacy partner for 
              residential care facilities across New England.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We focus exclusively on long-term care, helping facilities ensure 
              resident safety with expert pharmacy services.
            </p>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 md:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-xl">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">Meet Our Team</Link>
              <Link href="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
