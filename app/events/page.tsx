import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Upcoming Events & Workshops"
            subtitle="Events"
            description="Join us for inspiring events that bring our community together and create opportunities for growth."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[
            {
              title: "Youth Leadership Summit 2024",
              date: "March 15-17, 2024",
              time: "9:00 AM - 5:00 PM",
              location: "Convention Center, New York",
              description: "A three-day summit featuring workshops, keynote speakers, and networking opportunities for young leaders.",
              category: "Conference"
            },
            {
              title: "Career Development Workshop",
              date: "April 5, 2024",
              time: "2:00 PM - 6:00 PM",
              location: "Virtual Event",
              description: "Learn essential skills for career success from industry professionals.",
              category: "Workshop"
            },
            {
              title: "Community Service Day",
              date: "April 20, 2024",
              time: "10:00 AM - 3:00 PM",
              location: "Central Park, New York",
              description: "Join us for a day of giving back to our community through various service projects.",
              category: "Volunteer"
            },
            {
              title: "Tech Skills Bootcamp",
              date: "May 1-3, 2024",
              time: "9:00 AM - 4:00 PM",
              location: "Tech Hub, Boston",
              description: "Intensive training in coding, digital marketing, and tech entrepreneurship.",
              category: "Training"
            }
          ].map((event) => (
            <Card key={event.title}>
              <CardContent className="p-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {event.category}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{event.title}</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Register Now</Button>
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
                <h3 className="text-2xl font-bold">Host an Event</h3>
                <p className="mt-4 text-muted-foreground">
                  Interested in organizing a youth empowerment event in your community? Partner with us to create meaningful experiences.
                </p>
                <Button className="mt-6">Contact Us</Button>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Event Guidelines</h3>
                <ul className="mt-4 space-y-2">
                  <li>Register early to secure your spot</li>
                  <li>Arrive 15 minutes before start time</li>
                  <li>Bring required materials if specified</li>
                  <li>Follow our code of conduct</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}