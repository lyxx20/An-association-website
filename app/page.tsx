import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, BookOpen, Users, Heart, Sparkles, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Empowering Youth Since 2010</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Empowering Youth for a{' '}
                <span className="relative">
                  Better Tomorrow
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-white/20 -skew-x-12"></span>
                </span>
              </h1>
              <p className="text-xl leading-8 text-primary-foreground/90 mb-8">
                We believe in the power of young minds to change the world. Through education, mentorship, and community engagement, we're building the leaders of tomorrow.
              </p>
              <div className="flex items-center gap-x-6">
                <Button size="lg" variant="secondary" className="animate-float">
                  Get Involved
                </Button>
                <Link href="/about" className="text-sm font-semibold leading-6 text-primary-foreground group">
                  Learn more{' '}
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80"
                alt="Youth collaboration"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 pattern-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Our Impact</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Making a Difference in Young Lives
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Through our various programs and initiatives, we've helped thousands of young people realize their potential and achieve their dreams.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Education Support',
                  description: 'Providing access to quality education and learning resources for underprivileged youth.',
                  icon: BookOpen,
                  stat: '50,000+ Students'
                },
                {
                  name: 'Mentorship Programs',
                  description: 'Connecting young people with experienced mentors who guide them towards success.',
                  icon: Users,
                  stat: '5,000+ Mentors'
                },
                {
                  name: 'Community Impact',
                  description: 'Creating lasting change through youth-led community service projects.',
                  icon: Heart,
                  stat: '100+ Communities'
                },
              ].map((feature) => (
                <Card key={feature.name} className="card-hover border-primary/10">
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <dt className="mt-4 text-xl font-semibold">{feature.name}</dt>
                    <dd className="mt-2 text-muted-foreground">{feature.description}</dd>
                    <p className="mt-4 font-bold text-primary">{feature.stat}</p>
                  </CardContent>
                </Card>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-bg"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Get Involved</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in our mission to empower youth and create positive change in communities around the world.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: 'Volunteer',
                    description: 'Share your skills and experience with young people who need guidance.',
                  },
                  {
                    title: 'Donate',
                    description: 'Support our programs and help us reach more youth in need.',
                  },
                  {
                    title: 'Partner',
                    description: 'Collaborate with us to create more opportunities for young people.',
                  },
                ].map((item) => (
                  <div key={item.title} className="relative pl-16">
                    <dt className="text-xl font-semibold">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <ArrowRight className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-muted-foreground">{item.description}</dd>
                  </div>
                ))}
              </div>
              <Button className="mt-8" size="lg">
                Join Us Today
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
                alt="Youth volunteers"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl glass-effect"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}