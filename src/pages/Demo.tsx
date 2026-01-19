import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Search, Plus, Minus, ShoppingCart, FileText, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Medicine {
  id: string;
  name: string;
  genericName: string;
  dosageMg: number;
  price: number;
  manufacturer: string;
  diseaseTags: string[];
  description: string;
}

const mockMedicines: Medicine[] = [
  {
    id: "med_001",
    name: "Auooshadh-Care 250mg",
    genericName: "Metformin",
    dosageMg: 250,
    price: 120.5,
    manufacturer: "Auooshadh Pharma",
    diseaseTags: ["Diabetes"],
    description: "Used for glycemic control in Type 2 Diabetes",
  },
  {
    id: "med_002",
    name: "CardioShield 10mg",
    genericName: "Atorvastatin",
    dosageMg: 10,
    price: 89.0,
    manufacturer: "Auooshadh Pharma",
    diseaseTags: ["Cholesterol", "Heart"],
    description: "For managing high cholesterol levels",
  },
  {
    id: "med_003",
    name: "PressureEase 5mg",
    genericName: "Amlodipine",
    dosageMg: 5,
    price: 45.0,
    manufacturer: "Auooshadh Pharma",
    diseaseTags: ["Hypertension"],
    description: "For blood pressure management",
  },
  {
    id: "med_004",
    name: "PainRelief 400mg",
    genericName: "Ibuprofen",
    dosageMg: 400,
    price: 35.0,
    manufacturer: "Auooshadh Pharma",
    diseaseTags: ["Pain", "Inflammation"],
    description: "For pain and inflammation relief",
  },
  {
    id: "med_005",
    name: "VitaBoost D3",
    genericName: "Cholecalciferol",
    dosageMg: 60000,
    price: 150.0,
    manufacturer: "Auooshadh Pharma",
    diseaseTags: ["Vitamin D Deficiency"],
    description: "Weekly Vitamin D3 supplement",
  },
];

interface PrescriptionItem {
  medicine: Medicine;
  dosage: string;
  duration: number;
  quantity: number;
}

const Demo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [prescription, setPrescription] = useState<PrescriptionItem[]>([]);
  const [orderCreated, setOrderCreated] = useState(false);

  const filteredMedicines = mockMedicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.diseaseTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addToPrescription = (medicine: Medicine) => {
    const existing = prescription.find((p) => p.medicine.id === medicine.id);
    if (existing) {
      toast.info("Medicine already in prescription");
      return;
    }
    setPrescription([
      ...prescription,
      { medicine, dosage: "1 tab twice daily", duration: 30, quantity: 60 },
    ]);
    toast.success(`Added ${medicine.name} to prescription`);
  };

  const removeFromPrescription = (medicineId: string) => {
    setPrescription(prescription.filter((p) => p.medicine.id !== medicineId));
  };

  const totalPrice = prescription.reduce((sum, item) => sum + item.medicine.price * (item.quantity / 10), 0);

  const createOrder = () => {
    if (prescription.length === 0) {
      toast.error("Add medicines to prescription first");
      return;
    }
    setOrderCreated(true);
    toast.success("Order created successfully!");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Interactive Demo
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Try Auooshadh{" "}
              <span className="text-gradient">Live</span>
            </h1>
            <p className="text-muted-foreground">
              Search medicines, create prescriptions, and place demo orders to experience the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Medicine Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
            >
              <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Medicine Search
              </h2>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, generic, or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {filteredMedicines.map((medicine) => (
                  <motion.div
                    key={medicine.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{medicine.name}</h3>
                        <p className="text-sm text-muted-foreground">{medicine.genericName}</p>
                      </div>
                      <span className="text-lg font-bold text-primary">₹{medicine.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{medicine.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {medicine.diseaseTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToPrescription(medicine)}
                        className="gradient-primary border-0"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Prescription Composer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Prescription */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Prescription ({prescription.length} items)
                </h2>

                {prescription.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Add medicines to create prescription</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {prescription.map((item) => (
                      <div
                        key={item.medicine.id}
                        className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex-1">
                          <div className="font-medium">{item.medicine.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.dosage} × {item.duration} days
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">
                            ₹{(item.medicine.price * (item.quantity / 10)).toFixed(2)}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 text-destructive"
                            onClick={() => removeFromPrescription(item.medicine.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-accent">Free</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {orderCreated ? (
                  <div className="text-center py-6 bg-accent/10 rounded-xl">
                    <Check className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-1">Order Created!</h3>
                    <p className="text-muted-foreground text-sm">
                      Order #ORD{Date.now().toString().slice(-6)} • Est. delivery: Tomorrow
                    </p>
                  </div>
                ) : (
                  <Button
                    className="w-full gradient-primary border-0 py-6"
                    onClick={createOrder}
                    disabled={prescription.length === 0}
                  >
                    Create Order
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
