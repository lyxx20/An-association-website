import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { Heart, Target, Trophy, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Transforming Young Lives Through Empowerment"
            subtitle="About Us"
            description="Founded in 2010, Youth Empowerment Foundation has been dedicated to creating opportunities for young people to reach their full potential through education, mentorship, and community engagement."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Our Story</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              What started as a small group of passionate educators and mentors has grown into a global movement. We believe that every young person deserves the chance to succeed, regardless of their background or circumstances.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Over the years, we've developed comprehensive programs that address the real needs of youth in our communities, focusing on education, skill development, and leadership training.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Youth Served", value: "50,000+" },
              { label: "Communities", value: "100+" },
              { label: "Success Rate", value: "92%" },
              { label: "Volunteers", value: "5,000+" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Our Core Values"
          subtitle="What We Stand For"
          description="These principles guide everything we do in our mission to empower youth."
          centered
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Empowerment",
              description: "We believe in enabling youth to take control of their future.",
              icon: Heart,
            },
            {
              title: "Excellence",
              description: "We strive for the highest standards in all our programs.",
              icon: Trophy,
            },
            {
              title: "Inclusion",
              description: "We welcome and support youth from all backgrounds.",
              icon: Users,
            },
            {
              title: "Impact",
              description: "We focus on creating measurable, lasting change.",
              icon: Target,
            },
          ].map((value) => (
            <Card key={value.title}>
              <CardContent className="pt-6">
                <value.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 py-20 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
              Join Us in Making a Difference
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Together, we can create more opportunities for young people and build stronger communities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="secondary" size="lg">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}