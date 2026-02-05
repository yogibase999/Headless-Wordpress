"use client";

import { motion } from "framer-motion";
import {
  Package,
  Stethoscope,
  Truck,
  Phone,
  Shield,
  Syringe,
} from "lucide-react";

const icons: any = {
  package: Package,
  truck: Truck,
  phone: Phone,
  syringe: Syringe,
  shield: Shield,
  stethoscope: Stethoscope,
};

export default function FeaturesSection({ data }: { data: any }) {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {data.featuresTagline}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {data.featuresHeading}{" "}
            <span className="text-gradient-brand">
              {data.featuresHeadingHighlight}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {data.featuresDescription}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.featuresList.map((feature: any, index: number) => {
            const Icon = icons[feature.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow border border-border/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
