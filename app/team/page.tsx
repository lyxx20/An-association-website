import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Meet Our Dedicated Team"
            subtitle="Our Team"
            description="A diverse group of passionate individuals working together to empower youth and create positive change."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Sarah Williams",
              role: "Executive Director",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              bio: "With over 15 years of experience in youth development, Sarah leads our organization's mission to empower young people.",
              social: {
                twitter: "#",
                linkedin: "#",
                mail: "mailto:sarah@example.com"
              }
            },
            {
              name: "Michael Chen",
              role: "Program Director",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
              bio: "Michael oversees our educational programs and ensures they meet the highest standards of quality and impact.",
              social: {
                twitter: "#",
                linkedin: "#",
                mail: "mailto:michael@example.com"
              }
            },
            {
              name: "Jessica Rodriguez",
              role: "Community Outreach Manager",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              bio: "Jessica builds and maintains strong relationships with our community partners and volunteer network.",
              social: {
                twitter: "#",
                linkedin: "#",
                mail: "mailto:jessica@example.com"
              }
            }
          ].map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mt-1">{member.role}</p>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>
                  <div className="mt-6 flex space-x-4">
                    <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={member.social.mail} className="text-muted-foreground hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Join Our Team"
          subtitle="Careers"
          description="We're always looking for passionate individuals to join our mission."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[
            {
              title: "Program Coordinator",
              type: "Full-time",
              location: "New York, NY",
              description: "Lead and coordinate youth development programs."
            },
            {
              title: "Volunteer Manager",
              type: "Full-time",
              location: "Remote",
              description: "Manage and grow our volunteer network."
            }
          ].map((position) => (
            <Card key={position.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{position.title}</h3>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">{position.type}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{position.location}</span>
                </div>
                <p className="mt-4">{position.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}