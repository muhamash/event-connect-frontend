"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import
    {
        AlertTriangle,
        Lock,
        MapPin,
        PhoneCall,
        ShieldCheck,
        UserCheck,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const guidelines = [
  {
    icon: UserCheck,
    title: "Verify Participants",
    description:
      "Always ensure participants are registered and verified before granting access to any event or venue.",
  },
  {
    icon: ShieldCheck,
    title: "Follow Event Rules",
    description:
      "Respect event-specific rules and instructions provided by hosts or administrators at all times.",
  },
  {
    icon: Lock,
    title: "Protect Personal Information",
    description:
      "Do not share sensitive personal data such as passwords, OTPs, or financial information with others.",
  },
  {
    icon: MapPin,
    title: "Choose Safe Locations",
    description:
      "Hosts should select secure, accessible venues and clearly communicate location details in advance.",
  },
  {
    icon: AlertTriangle,
    title: "Report Suspicious Activity",
    description:
      "Immediately report any suspicious behavior, safety concerns, or policy violations to the admin team.",
  },
  {
    icon: PhoneCall,
    title: "Emergency Preparedness",
    description:
      "Keep emergency contacts available and follow local emergency protocols if any incident occurs.",
  },
];

export default function SafetyGuidelinesPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            🛡️ Safety First
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Safety
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Guidelines
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your safety matters to us. Please follow these guidelines to ensure
            a secure and enjoyable experience for everyone.
          </p>
        </motion.div>
      </section>

      {/* Guidelines Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelines.map((item) => (
            <motion.div key={item.title} {...fadeInUp}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-card h-full">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="container mx-auto px-4 pb-24">
        <motion.div
          {...fadeInUp}
          className="max-w-3xl mx-auto text-center text-muted-foreground"
        >
          By using this platform, you agree to follow all safety rules. Failure
          to comply may result in account suspension or event removal.
        </motion.div>
      </section>

    </div>
  );
}