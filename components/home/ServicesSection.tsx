"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Building2,CheckCircle2 ,ArrowRight  } from "lucide-react";
type WPText = { text?: string } | string;

type ServiceFeature = WPText;

type ServiceItem = {
  icon?: keyof typeof Icons;
  title?: WPText;
  description?: WPText;
  features?: ServiceFeature[];
  link?: {
    url?: string;
  };
};

type ServicesSectionData = {
  servicesTagline?: WPText;
  servicesHeading?: WPText;
  servicesHeadingHighlight?: WPText;
  servicesDescription?: WPText;
  servicesList?: ServiceItem[];
};

const getText = (field?: WPText) =>
  typeof field === "string" ? field : field?.text || "";

export default function ServicesSection({
  data,
}: {
  data: ServicesSectionData | null;
}) {
  if (!data || !data.servicesList?.length) return null;

  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {getText(data.servicesTagline)}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {getText(data.servicesHeading)}{" "}
            <span className="text-gradient-brand">
              {getText(data.servicesHeadingHighlight)}
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            {getText(data.servicesDescription)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.servicesList.map((service, index) => {
           const iconName = service.icon || "Building2";
  const Icon = (Icons as Record<string, LucideIcon>)[iconName] || Building2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {getText(service.title)}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {getText(service.description)}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-healthcare flex-shrink-0" />
                      <span>{getText(feature)}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link?.url || "#"}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground shadow-elevated hover:shadow-card hover:scale-[1.02] font-semibold h-14 rounded-lg px-10 text-lg"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
