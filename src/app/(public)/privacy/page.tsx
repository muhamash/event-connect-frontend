"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import
    {
        Database,
        Eye,
        Lock,
        UserCheck,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const policies = [
  {
    icon: Database,
    title: "Information We Collect",
    content:
      "We collect personal information such as name, email, and event activity to provide and improve our services.",
  },
  {
    icon: Eye,
    title: "How We Use Data",
    content:
      "Your data is used for account management, event participation, communication, and platform improvements.",
  },
  {
    icon: Lock,
    title: "Data Security",
    content:
      "We use industry-standard security practices to protect your information from unauthorized access.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal information at any time.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            🔒 Privacy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your privacy matters. Learn how we collect, use, and protect your data.
          </p>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((item) => (
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
          We never sell your data. By using EventConnect, you consent to this privacy policy.
        </motion.p>
      </section>

    </div>
  );
}
