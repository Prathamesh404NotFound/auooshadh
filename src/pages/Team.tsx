import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOMetaTags } from "@/components/seo/SEOMetaTags";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Plus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  type: "company" | "individual";
  linkedIn?: string;
  twitter?: string;
  email?: string;
  tags?: string[];
}

const initialTeam: TeamMember[] = [
  {
    id: "team_01",
    name: "Shivani Kale",
    role: "Medical Advisor",
    bio: "Practicing GP with 12+ years experience. Guiding Auooshadh's medical accuracy and compliance standards.",
    image: "/src/assets/team/Shivani-Kale.jpeg",
    type: "individual",
    linkedIn: "#",
    email: "shivani@auooshadh.com",
    tags: ["Healthcare", "Advisory"],
  },
  {
    id: "team_02",
    name: "Avinash",
    role: "Product Manager",
    bio: "Product lead driving Auooshadh vision. 8+ years in healthcare tech product development.",
    image: "/src/assets/team/avinash.jpeg",
    type: "individual",
    linkedIn: "#",
    email: "avinash@auooshadh.com",
    tags: ["Product", "Strategy"],
  },
  {
    id: "team_03",
    name: "Jay",
    role: "CTO",
    bio: "Technology leader with expertise in scalable healthcare platforms. Previously at leading health tech startups.",
    image: "/src/assets/team/jay.jpeg",
    type: "individual",
    linkedIn: "#",
    twitter: "#",
    email: "jay@auooshadh.com",
    tags: ["Technology", "Leadership"],
  },
  {
    id: "team_04",
    name: "Girish Kumar",
    role: "Developer",
    bio: "Full-stack developer specializing in React and Node.js applications.",
    image: "/src/assets/team/Girish Kumar.jpeg",
    type: "individual",
    linkedIn: "#",
    email: "girish@auooshadh.com",
    tags: ["Development", "Backend"],
  },
  {
    id: "team_05",
    name: "Prathamesh Jadhav",
    role: "UI/UX Designer",
    bio: "Creative designer focused on user experience and modern interface design.",
    image: "/src/assets/team/Prathamesh Jadhav.jpeg",
    type: "individual",
    linkedIn: "#",
    email: "prathamesh@auooshadh.com",
    tags: ["Design", "UX"],
  },
];

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [isOpen, setIsOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
    linkedIn: "",
    email: "",
    tags: "",
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://auooshadh.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Team",
        "item": "https://auooshadh.com/team"
      }
    ]
  };

  const handleAddMember = () => {
    const member: TeamMember = {
      id: `team_${Date.now()}`,
      name: newMember.name,
      role: newMember.role,
      bio: newMember.bio,
      image: newMember.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face",
      type: "individual",
      linkedIn: newMember.linkedIn || undefined,
      email: newMember.email || undefined,
      tags: newMember.tags ? newMember.tags.split(",").map(t => t.trim()) : undefined,
    };
    setTeam([...team, member]);
    setNewMember({ name: "", role: "", bio: "", image: "", linkedIn: "", email: "", tags: "" });
    setIsOpen(false);
  };

  return (
    <>
      <SEOMetaTags
        title="Meet Our Team - Auooshadh Healthcare Professionals"
        description="Meet the passionate team behind Auooshadh - healthcare professionals, developers, and innovators building India's digital healthcare future."
        canonical="/team"
        jsonLd={[breadcrumbSchema]}
      />
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
                Our Team
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                The Team Behind{" "}
                <span className="text-gradient">Auooshadh</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Meet the passionate individuals and partners building India's healthcare future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {/* Add Member Button */}
            <div className="flex justify-end mb-8">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="gradient-primary border-0">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Team Member (Demo)
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add Team Member</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newMember.name}
                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        value={newMember.role}
                        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={newMember.bio}
                        onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                        placeholder="Short bio..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Photo URL (optional)</Label>
                      <Input
                        id="image"
                        value={newMember.image}
                        onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input
                        id="email"
                        value={newMember.email}
                        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input
                        id="tags"
                        value={newMember.tags}
                        onChange={(e) => setNewMember({ ...newMember, tags: e.target.value })}
                        placeholder="Design, Development"
                      />
                    </div>
                    <Button onClick={handleAddMember} className="w-full gradient-primary border-0">
                      Add Member
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 ${member.type === "company" ? "ring-2 ring-primary/20" : ""
                    }`}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                    {member.type === "company" && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        Partner
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-4">{member.name}</h3>

                    <div className="flex items-center gap-3">
                      {member.linkedIn && (
                        <a href={member.linkedIn} className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team;
