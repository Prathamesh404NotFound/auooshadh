import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Pill, 
  Stethoscope, 
  FileText, 
  ShoppingCart, 
  Microscope, 
  Shield,
  Zap,
  Clock,
  Search,
  BarChart3,
  Bell,
  Globe
} from "lucide-react";

const featureCategories = [
  {
    title: "For Doctors",
    description: "Tools to enhance prescription accuracy and patient care",
    features: [
      {
        icon: Stethoscope,
        title: "AI-Powered Prescriptions",
        description: "Get intelligent drug suggestions based on diagnosis, patient history, and drug interactions.",
      },
      {
        icon: FileText,
        title: "Digital Health Records",
        description: "Access complete patient history, previous prescriptions, and test results in one place.",
      },
      {
        icon: BarChart3,
        title: "Treatment Analytics",
        description: "Track treatment outcomes and get insights to improve patient care.",
      },
    ],
  },
  {
    title: "For Patients",
    description: "Simplify your healthcare journey",
    features: [
      {
        icon: Search,
        title: "Medicine Discovery",
        description: "Search medicines, compare prices, and find alternatives with detailed information.",
      },
      {
        icon: ShoppingCart,
        title: "Online Ordering",
        description: "Order medicines from verified pharmacies with doorstep delivery.",
      },
      {
        icon: Microscope,
        title: "Lab Test Booking",
        description: "Book diagnostic tests and access digital reports anytime.",
      },
    ],
  },
  {
    title: "For Pharmacies",
    description: "Modernize your pharmacy operations",
    features: [
      {
        icon: Bell,
        title: "Prescription Routing",
        description: "Receive digital prescriptions directly from doctors with all details.",
      },
      {
        icon: Pill,
        title: "Inventory Management",
        description: "Track stock levels, expiry dates, and automate reordering.",
      },
      {
        icon: Globe,
        title: "Online Presence",
        description: "Reach more customers through our platform marketplace.",
      },
    ],
  },
  {
    title: "Platform Features",
    description: "Core capabilities powering the ecosystem",
    features: [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance with healthcare regulations.",
      },
      {
        icon: Zap,
        title: "Real-time Updates",
        description: "Instant notifications for prescriptions, orders, and reports.",
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock assistance for all users.",
      },
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Powerful Features for{" "}
              <span className="text-gradient">Modern Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools designed to transform how healthcare is delivered and experienced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-24">
          {featureCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Try our interactive demo to see how Auooshadh can transform your healthcare experience.
            </p>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
            >
              Try Demo Now
              <Zap className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
