import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import networkImage from "@/assets/healthcare-network.jpg";

const values = [
  {
    icon: Heart,
    title: "Patient First",
    description: "Every decision we make prioritizes patient health outcomes and accessibility.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in healthcare technology and service.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building bridges between all healthcare stakeholders for better outcomes.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making quality healthcare accessible to everyone, everywhere in India.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={networkImage}
            alt="Healthcare network"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Building India's Most Trusted{" "}
              <span className="text-gradient">Healthcare Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Auooshadh aims to revolutionize healthcare delivery by connecting doctors, patients, 
              pharmacies, labs, and pharmaceutical companies on a single intelligent platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 shadow-lg border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize healthcare access in India by providing a unified digital platform 
                that improves prescription accuracy, enhances patient access to medicines and diagnostics, 
                and digitizes healthcare operations for better outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 shadow-lg border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted and intelligent digital healthcare ecosystem where 
                every citizen has seamless access to quality healthcare services, from consultation 
                to treatment and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Drives Us Every Day
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "2023", label: "Founded" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Cities" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
