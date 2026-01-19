import { motion } from "framer-motion";
import { 
  Pill, 
  Stethoscope, 
  FileText, 
  ShoppingCart, 
  Microscope, 
  Shield,
  Zap,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "AI-Powered Prescriptions",
    description: "Smart suggestions help doctors create accurate prescriptions with dosage recommendations.",
    color: "bg-primary",
  },
  {
    icon: Pill,
    title: "Medicine Discovery",
    description: "Search and compare medicines with detailed information, alternatives, and pricing.",
    color: "bg-secondary",
  },
  {
    icon: ShoppingCart,
    title: "Online Ordering",
    description: "Order medicines from verified partner pharmacies with doorstep delivery.",
    color: "bg-accent",
  },
  {
    icon: Microscope,
    title: "Lab Bookings",
    description: "Book diagnostic tests and access digital reports from certified labs.",
    color: "bg-highlight",
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Secure storage of prescriptions, test reports, and health history.",
    color: "bg-primary",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance with healthcare regulations.",
    color: "bg-secondary",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Quick access to healthcare services anytime, anywhere from any device.",
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your healthcare queries.",
    color: "bg-highlight",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">Better Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tools and features designed for doctors, patients, pharmacies, and labs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
