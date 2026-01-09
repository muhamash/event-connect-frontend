"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import
    {
        AlertTriangle,
        FileText,
        Shield,
        Users,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const sections = [
  {
    icon: Users,
    title: "User Responsibilities",
    content:
      "Users must provide accurate information, follow event guidelines, and respect other members. Any misuse, harassment, or illegal activity may result in suspension or permanent removal.",
  },
  {
    icon: Shield,
    title: "Account & Security",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials. EventConnect is not liable for losses caused by unauthorized access.",
  },
  {
    icon: FileText,
    title: "Event Hosting",
    content:
      "Hosts are responsible for event accuracy, safety, and compliance with local laws. EventConnect acts only as a platform and does not organize events directly.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "EventConnect shall not be liable for personal injury, loss, or damages arising from event participation. Users attend events at their own risk.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            📄 Legal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms &
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Conditions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using EventConnect.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item) => (
            <motion.div key={item.title} {...fadeInUp}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all h-full">
                <CardContent className="p-8">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeInUp}
          className="text-sm text-muted-foreground mt-12 max-w-4xl mx-auto text-center"
        >
          By accessing or using EventConnect, you agree to be bound by these terms.
        </motion.p>
      </section>

    </div>
  );
}
