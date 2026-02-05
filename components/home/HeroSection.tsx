"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Truck, Clock, Users } from "lucide-react";

type Props = { data: any };

const iconMap: any = {
  shield: Shield,
  truck: Truck,
  clock: Clock,
  users: Users,
};

export default function HeroSection({ data }: Props) {
  if (!data) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.heroBgImage?.node?.sourceUrl || "/images/hero-pharmacy.jpg"}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6"
          >
            {data.heroBadgeText}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {data.heroHeading}{" "}
            <span className="text-accent">{data.heroHeadingHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl"
          >
            {data.heroDescription}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href={data.heroBtn1Link?.url || "#"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft hover:shadow-card h-14 rounded-lg px-10 text-lg"
            >
              {data.heroButton1.text}
            </Link>

            <Link
              href={data.heroBtn2Link?.url || "#"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 h-14 rounded-lg px-10 text-lg"
            >
              {data.heroButton2.text}
            </Link>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {data.heroFeatures?.map((feature: any, i: number) => {
              const Icon = iconMap[feature.icon?.toLowerCase()] || Shield;
              return (
                <div key={i} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm">{feature.title}</p>
                    <p className="text-primary-foreground/70 text-xs">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
