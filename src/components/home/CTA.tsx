import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import networkImage from "@/assets/healthcare-network.jpg";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={networkImage}
          alt="Healthcare network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Get Started Today</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of doctors, patients, and healthcare partners already using Auooshadh.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/demo">
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl bg-transparent"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
