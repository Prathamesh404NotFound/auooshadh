import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "General Physician, Mumbai",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    content: "Auooshadh has transformed how I write prescriptions. The AI suggestions are incredibly helpful and save me so much time.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Patient, Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Ordering medicines online and tracking my prescriptions has never been easier. Excellent service!",
    rating: 5,
  },
  {
    name: "MediCare Pharmacy",
    role: "Partner Pharmacy, Bangalore",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=150&h=150&fit=crop",
    content: "Digital prescription routing has reduced errors and improved our efficiency significantly.",
    rating: 5,
  },
];

export const Testimonials = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted by{" "}
            <span className="text-gradient">Healthcare Professionals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what doctors, patients, and healthcare partners say about Auooshadh.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
