"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import
    {
        CalendarPlus,
        CheckCircle,
        Ticket,
        UserPlus,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Sign up as a participant or apply to become a host through a simple verification process.",
  },
  {
    step: "02",
    icon: CalendarPlus,
    title: "Create or Discover Events",
    description:
      "Hosts can create events while users explore ongoing and upcoming events.",
  },
  {
    step: "03",
    icon: Ticket,
    title: "Join & Participate",
    description:
      "Register for events, receive updates, and attend securely.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Complete & Review",
    description:
      "After the event, leave reviews and help maintain platform quality.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            ⚙️ How It Works
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple.
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Secure.
            </span>{" "}
            Transparent.
          </h1>
          <p className="text-xl text-muted-foreground">
            Get started in just a few easy steps and enjoy a seamless event experience.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <motion.div key={item.step} {...fadeInUp}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                    <span className="text-3xl font-bold text-muted-foreground/40">
                      {item.step}
                    </span>
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

    </div>
  );
}
