import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Comprehensive Programs for Youth Development"
            subtitle="Our Programs"
            description="We offer a range of programs designed to support young people at every stage of their journey."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[
            {
              title: "Educational Support",
              description: "Access to quality education through scholarships, tutoring, and resources.",
              icon: BookOpen,
              features: [
                "One-on-one tutoring",
                "Scholarship programs",
                "Educational resources",
                "Academic counseling"
              ]
            },
            {
              title: "Mentorship Program",
              description: "Connecting youth with experienced mentors for guidance and support.",
              icon: Users,
              features: [
                "Career guidance",
                "Personal development",
                "Goal setting",
                "Leadership training"
              ]
            },
            {
              title: "Skills Development",
              description: "Practical skills training for career readiness and personal growth.",
              icon: Briefcase,
              features: [
                "Technical training",
                "Soft skills development",
                "Digital literacy",
                "Financial education"
              ]
            },
            {
              title: "Leadership Academy",
              description: "Developing the next generation of community leaders.",
              icon: GraduationCap,
              features: [
                "Leadership workshops",
                "Public speaking",
                "Project management",
                "Community service"
              ]
            }
          ].map((program) => (
            <Card key={program.title} className="flex flex-col">
              <CardContent className="pt-6 flex-1">
                <program.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
                <p className="mt-2 text-muted-foreground">{program.description}</p>
                <ul className="mt-6 space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Program Eligibility</h3>
                <p className="mt-4 text-muted-foreground">
                  Our programs are open to youth aged 13-25. Each program has specific eligibility criteria based on factors such as:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    <span>Age group and educational level</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    <span>Geographic location</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    <span>Commitment level required</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    <span>Previous program participation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold">How to Apply</h3>
                <p className="mt-4 text-muted-foreground">
                  Ready to join one of our programs? The application process is simple:
                </p>
                <ol className="mt-4 space-y-2 list-decimal list-inside">
                  <li>Review program requirements</li>
                  <li>Complete the online application form</li>
                  <li>Submit required documentation</li>
                  <li>Attend an interview (if required)</li>
                </ol>
                <Button className="mt-6">Apply Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}