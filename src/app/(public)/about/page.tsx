"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import
    {
        Globe,
        Rocket,
        ShieldCheck,
        Users,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            🌍 About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting People Through
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Events
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We’re building a trusted platform where hosts and participants come
            together to create meaningful, safe, and memorable experiences.
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Rocket,
              title: "Our Mission",
              text:
                "To simplify event hosting and participation through secure technology, transparency, and community trust.",
            },
            {
              icon: Globe,
              title: "Our Vision",
              text:
                "To become a global event ecosystem where anyone can host or attend events with confidence.",
            },
          ].map((item) => (
            <motion.div key={item.title} {...fadeInUp}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 pb-24">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Core
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Values
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Trust & Safety",
              desc: "We prioritize user security and transparent policies.",
            },
            {
              icon: Users,
              title: "Community First",
              desc: "Our platform is built around real people and real experiences.",
            },
            {
              icon: Rocket,
              title: "Innovation",
              desc: "We continuously improve using modern technology.",
            },
          ].map((item) => (
            <motion.div key={item.title} {...fadeInUp}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8 text-center">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
