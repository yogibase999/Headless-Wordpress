"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection({ data }: { data: any }) {
  //if (!data) return null;

  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {data.ctaHeading}{" "}
            <span className="text-gradient-brand">
              {data.ctaHeadingHighlight}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {data.ctaDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href={data.ctabtn1link}
              className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground shadow-elevated hover:scale-[1.02] font-semibold h-14 rounded-lg px-10 text-lg group"
            >
              {data.ctaBtn1Text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={data.ctaBtn2Link}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 rounded-lg px-10 text-lg"
            >
              <Phone className="w-5 h-5" />
              {data.ctaBtn2Text}
            </a>
          </div>

          <p className="text-muted-foreground">
            {data.ctaFooterText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
