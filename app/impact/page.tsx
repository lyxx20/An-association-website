import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 lg:pt-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-10">
          <SectionHeader
            title="Making a Measurable Difference"
            subtitle="Our Impact"
            description="Through our programs and initiatives, we've created lasting positive change in communities across the globe."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Education Impact",
              stats: [
                { label: "Students Supported", value: "50,000+" },
                { label: "Graduation Rate", value: "95%" },
                { label: "Scholarship Recipients", value: "2,500+" }
              ],
              icon: BarChart,
            },
            {
              title: "Community Reach",
              stats: [
                { label: "Communities Served", value: "100+" },
                { label: "Active Volunteers", value: "5,000+" },
                { label: "Local Partners", value: "250+" }
              ],
              icon: PieChart,
            },
            {
              title: "Career Development",
              stats: [
                { label: "Job Placements", value: "15,000+" },
                { label: "Mentorship Hours", value: "100,000+" },
                { label: "Success Rate", value: "92%" }
              ],
              icon: LineChart,
            }
          ].map((section) => (
            <Card key={section.title}>
              <CardContent className="pt-6">
                <section.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{section.title}</h3>
                <dl className="mt-4 space-y-4">
                  {section.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                      <dd className="text-2xl font-semibold tracking-tight">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Success Stories"
          subtitle="Real Impact"
          description="Meet some of the young people whose lives have been transformed through our programs."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              program: "Educational Support",
              story: "From struggling student to university graduate, Sarah's journey exemplifies the power of mentorship and support.",
              achievement: "Now a software engineer at a leading tech company"
            },
            {
              name: "Michael Chen",
              program: "Leadership Academy",
              story: "Michael developed crucial leadership skills that helped him start a community outreach program.",
              achievement: "Founded a youth-led nonprofit organization"
            },
            {
              name: "Maria Rodriguez",
              program: "Skills Development",
              story: "Through our technical training program, Maria gained the skills needed to pursue her dream career.",
              achievement: "Successful small business owner"
            }
          ].map((story) => (
            <Card key={story.name}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg">{story.name}</h3>
                <p className="text-sm text-primary mt-1">{story.program}</p>
                <p className="mt-4 text-muted-foreground">{story.story}</p>
                <p className="mt-4 text-sm font-medium">{story.achievement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Annual Impact Report</h3>
                <p className="mt-4 text-muted-foreground">
                  Our commitment to transparency means we regularly share detailed reports about our impact and use of resources.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Program Success Rate", value: "92%" },
                    { label: "Donor Trust Score", value: "98%" },
                    { label: "Resource Utilization", value: "95%" },
                    { label: "Community Satisfaction", value: "96%" }
                  ].map((metric) => (
                    <div key={metric.label} className="bg-muted p-4 rounded-lg">
                      <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                      <dd className="text-2xl font-semibold mt-1">{metric.value}</dd>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sustainable Development Goals</h3>
                <p className="mt-4 text-muted-foreground">
                  Our work contributes to several UN Sustainable Development Goals:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Quality Education</li>
                  <li>Decent Work and Economic Growth</li>
                  <li>Reduced Inequalities</li>
                  <li>Partnerships for the Goals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}