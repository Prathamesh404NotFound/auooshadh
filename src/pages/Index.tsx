import { Layout } from "@/components/layout/Layout";
import { SEOMetaTags } from "@/components/seo/SEOMetaTags";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Auooshadh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Auooshadh is India's leading digital healthcare platform that allows you to order medicines online, consult doctors, book diagnostic tests, and manage prescriptions digitally."
        }
      },
      {
        "@type": "Question",
        "name": "How does online medicine ordering work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply upload your prescription or search for medicines, add them to cart, and get them delivered to your doorstep. We offer fast delivery across India."
        }
      },
      {
        "@type": "Question",
        "name": "Can I consult doctors online through Auooshadh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Auooshadh provides online doctor consultations with qualified healthcare professionals through video calls and chat."
        }
      }
    ]
  };

  return (
    <>
      <SEOMetaTags
        title="Auooshadh - Digital Healthcare Platform | Online Medicine & Doctor Consultation"
        description="Order medicines online, consult doctors, book diagnostic tests, and manage prescriptions digitally with Auooshadh. Fast, secure, and affordable healthcare at your fingertips."
        jsonLd={[faqSchema]}
      />
      <Layout>
        <Hero />
        <Stats />
        <Features />
        <Ecosystem />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
