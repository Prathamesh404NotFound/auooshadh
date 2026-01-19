import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-healthcare.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern healthcare technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-secondary/40"
            initial={{ x: Math.random() * 100, y: Math.random() * 100 }}
            animate={{
              x: [null, Math.random() * 400, Math.random() * 200],
              y: [null, Math.random() * 400, Math.random() * 200],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">India's #1 Healthcare Platform</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            Smarter Prescriptions.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Faster Access.
            </span>{" "}
            Trusted Care.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed"
          >
            Discover medicines, consult doctors, order online, and get digital reports — 
            all in one trusted platform connecting healthcare ecosystem.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            {[
              { icon: Shield, text: "Verified Doctors" },
              { icon: CheckCircle, text: "Secure Data" },
              { icon: CheckCircle, text: "Partner Pharmacies" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary border-0 text-white px-8 py-6 text-lg rounded-xl hover-lift"
            >
              <Link to="/demo">
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/ecosystem">
                <Play className="w-5 h-5 mr-2" />
                Explore Ecosystem
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
