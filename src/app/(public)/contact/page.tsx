"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import
    {
        Mail,
        MapPin,
        Phone,
        Send,
        Shield,
    } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            📩 Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We’d Love to
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Hear From You
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions, feedback, or partnership ideas? Our team is always ready to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Contact Info */}
          <motion.div {...fadeInUp} className="lg:col-span-1 space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                value: "support@eventconnect.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                value: "+880 1234 567 890",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Dhaka, Bangladesh",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-card"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Trust */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <p className="text-muted-foreground text-sm">
                  Your information is safe with us. We never share personal data with third parties.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>

                <form className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Email Address" />
                  </div>

                  <Input placeholder="Subject" />

                  <Textarea
                    placeholder="Write your message..."
                    rows={5}
                  />

                  <Button
                    size="lg"
                    className="bg-gradient-primary text-primary-foreground hover:shadow-glow w-fit"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>
    </div>
  );
}