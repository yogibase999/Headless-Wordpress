"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Building } from "lucide-react";

type Props = {
  data: any;
};

export default function AboutSection({ data }: Props) {
  if (!data) return null;

  const stats = [
    { value: data.stat1Value, label: data.stat1Label, icon: Award },
    { value: data.stat2Value, label: data.stat2Label, icon: Building },
    { value: data.stat3Value, label: data.stat3Label, icon: Users },
  ];

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
                src={data.aboutImage?.node?.sourceUrl || "/images/pharmacist-consultation.jpg"}
                alt={data.aboutHeading || "About section image"}
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
              {data.aboutTagline}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {data.aboutHeading}{" "}
              <span className="text-gradient-brand">
                {data.aboutHeadingHighlight}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {data.aboutPara1}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {data.aboutPara2}
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
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-hero text-primary-foreground shadow-elevated hover:shadow-card hover:scale-[1.02] font-semibold h-11 rounded-md px-8 text-base"
              >
                Meet Our Team
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground h-11 rounded-md px-8 text-base"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
