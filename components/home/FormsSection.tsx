"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, RefreshCw, Calendar, ArrowRight } from "lucide-react";

const icons: any = {
  filetext: FileText,
  refreshcw: RefreshCw,
  calendar: Calendar,
};

export default function FormsSection({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            {data.formsTagline}
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {data.formsHeading}{" "}
            <span className="text-gradient-brand">
              {data.formsHeadingHighlight}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {data.formsDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.formsList.map((form: any, index: number) => {
            const Icon = icons[form.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={form.link || "#"}
                  className="group block h-full bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all border border-border/50 text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-accent mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-accent-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {form.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {form.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                    Access Form <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
