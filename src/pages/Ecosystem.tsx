import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Users, 
  Building2, 
  Microscope, 
  Factory,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import doctorImage from "@/assets/doctor-consultation.jpg";
import pharmacyImage from "@/assets/pharmacy.jpg";
import labImage from "@/assets/laboratory.jpg";
import patientImage from "@/assets/patient-app.jpg";

const ecosystemRoles = [
  {
    id: "doctors",
    icon: Stethoscope,
    title: "Doctors",
    subtitle: "Enhance Your Practice",
    description: "Auooshadh empowers doctors with AI-assisted prescription tools, patient management, and seamless integration with pharmacies and labs.",
    image: doctorImage,
    features: [
      "AI-powered prescription suggestions",
      "Complete patient history access",
      "Direct pharmacy communication",
      "Digital prescription tracking",
      "Treatment outcome analytics",
    ],
    color: "bg-primary",
  },
  {
    id: "patients",
    icon: Users,
    title: "Patients",
    subtitle: "Healthcare Made Simple",
    description: "Access your prescriptions, order medicines, book tests, and manage your complete health records from one convenient platform.",
    image: patientImage,
    features: [
      "Digital prescription access",
      "Online medicine ordering",
      "Lab test booking",
      "Health record storage",
      "Price comparison tools",
    ],
    color: "bg-secondary",
  },
  {
    id: "pharmacies",
    icon: Building2,
    title: "Pharmacies",
    subtitle: "Digitize Operations",
    description: "Receive digital prescriptions, manage inventory efficiently, and connect with patients and doctors on a modern platform.",
    image: pharmacyImage,
    features: [
      "Digital prescription routing",
      "Inventory management",
      "Order fulfillment tools",
      "Customer engagement",
      "Analytics dashboard",
    ],
    color: "bg-accent",
  },
  {
    id: "labs",
    icon: Microscope,
    title: "Diagnostic Labs",
    subtitle: "Streamline Testing",
    description: "Accept bookings, deliver digital reports, and integrate seamlessly with doctors and patients in the healthcare network.",
    image: labImage,
    features: [
      "Online test booking",
      "Digital report delivery",
      "Doctor integration",
      "Sample tracking",
      "Quality analytics",
    ],
    color: "bg-highlight",
  },
  {
    id: "pharma",
    icon: Factory,
    title: "Pharma Companies",
    subtitle: "Targeted Reach",
    description: "Access a compliant channel to reach verified prescribers and pharmacies with product information and updates.",
    image: doctorImage,
    features: [
      "Verified prescriber access",
      "Compliant promotion",
      "Market analytics",
      "Product updates",
      "Pharmacy network",
    ],
    color: "bg-primary",
  },
];

const Ecosystem = () => {
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
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              One Platform,{" "}
              <span className="text-gradient">Complete Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connecting every stakeholder in the healthcare journey for better outcomes and seamless experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Roles */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {ecosystemRoles.map((role, index) => (
            <motion.div
              key={role.id}
              id={role.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${role.color}/10 mb-6`}>
                  <role.icon className={`w-5 h-5 ${role.color === "bg-primary" ? "text-primary" : role.color === "bg-secondary" ? "text-secondary" : role.color === "bg-accent" ? "text-accent" : "text-highlight"}`} />
                  <span className="text-sm font-medium">{role.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  For {role.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {role.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more about {role.title.toLowerCase()} features
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className={`absolute inset-0 ${role.color} rounded-3xl transform rotate-3`} />
                  <img
                    src={role.image}
                    alt={role.title}
                    className="relative rounded-3xl shadow-xl w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It All Connects
            </h2>
            <p className="text-muted-foreground text-lg">
              See how Auooshadh creates a seamless flow between all healthcare stakeholders.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {ecosystemRoles.slice(0, 4).map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-20 h-20 rounded-2xl ${role.color} flex items-center justify-center`}>
                  <role.icon className="w-10 h-10 text-white" />
                </div>
                {index < 3 && (
                  <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ecosystem;
