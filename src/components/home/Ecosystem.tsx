import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/doctor-consultation.jpg";
import pharmacyImage from "@/assets/pharmacy.jpg";
import labImage from "@/assets/laboratory.jpg";
import patientImage from "@/assets/patient-app.jpg";

const roles = [
  {
    title: "Doctors",
    subtitle: "Smart Prescriptions",
    description: "Create accurate prescriptions with AI suggestions, manage patient records, and track treatment outcomes.",
    image: doctorImage,
    color: "from-primary to-primary/80",
    link: "/ecosystem#doctors",
  },
  {
    title: "Patients",
    subtitle: "Healthcare at Fingertips",
    description: "Access prescriptions, order medicines, book tests, and maintain complete health records digitally.",
    image: patientImage,
    color: "from-secondary to-secondary/80",
    link: "/ecosystem#patients",
  },
  {
    title: "Pharmacies",
    subtitle: "Digitize Operations",
    description: "Receive digital prescriptions, manage inventory, and fulfill orders efficiently.",
    image: pharmacyImage,
    color: "from-accent to-accent/80",
    link: "/ecosystem#pharmacies",
  },
  {
    title: "Diagnostic Labs",
    subtitle: "Digital Reports",
    description: "Accept test bookings, deliver digital reports, and integrate with the healthcare network.",
    image: labImage,
    color: "from-highlight to-highlight/80",
    link: "/ecosystem#labs",
  },
];

export const Ecosystem = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Connecting the{" "}
            <span className="text-gradient">Healthcare Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One platform serving all healthcare stakeholders with seamless integration and workflows.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] hover-lift"
            >
              <img
                src={role.image}
                alt={role.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${role.color} opacity-80`} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-sm font-medium text-white/80 mb-2">
                  {role.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                  {role.title}
                </h3>
                <p className="text-white/80 mb-4 max-w-md">
                  {role.description}
                </p>
                <Link
                  to={role.link}
                  className="inline-flex items-center gap-2 text-white font-medium group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
