import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Stories of Transformation"
            subtitle="Success Stories"
            description="Meet the inspiring young individuals who have transformed their lives through our programs."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {[
            {
              name: "David Thompson",
              age: 23,
              program: "Leadership Academy",
              image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
              quote: "The Leadership Academy gave me the confidence and skills to start my own youth mentoring program.",
              story: "After graduating from our Leadership Academy, David founded a mentoring program that has helped over 100 at-risk youth in his community.",
              achievement: "Founded Youth Mentoring Initiative"
            },
            {
              name: "Emily Chen",
              age: 19,
              program: "Educational Support",
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
              quote: "The scholarship and mentoring support changed my life. I'm now pursuing my dream of becoming a doctor.",
              story: "Despite financial challenges, Emily secured a full scholarship through our program and is now studying pre-med at a top university.",
              achievement: "Pre-Med Student & Community Health Advocate"
            },
            {
              name: "Marcus Johnson",
              age: 25,
              program: "Skills Development",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              quote: "The technical training program opened doors I never thought possible in the tech industry.",
              story: "Marcus completed our coding bootcamp and now works as a software developer, while also teaching coding to underprivileged youth.",
              achievement: "Senior Software Developer & Youth Mentor"
            }
          ].map((story) => (
            <Card key={story.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <blockquote className="text-xl italic mb-6">
                      "{story.quote}"
                    </blockquote>
                    <h3 className="text-2xl font-semibold">{story.name}</h3>
                    <p className="text-primary mt-1">{story.achievement}</p>
                    <p className="mt-4 text-muted-foreground">{story.story}</p>
                    <div className="mt-6 flex items-center space-x-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Program: </span>
                        <span className="font-medium">{story.program}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Age: </span>
                        <span className="font-medium">{story.age}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="max-w-2xl mx-auto">
              Are you a graduate of our programs? We'd love to hear about your journey and share your success story with our community.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}