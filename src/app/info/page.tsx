"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ferreteria from '../../../public/ferreteria.jpeg';
import { CheckIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section id="hero" className="relative h-[80vh] w-full bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-cover bg-center opacity-50"/>
          <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-6">
            <div className="z-10 space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Revolutionize Your Business</h1>
              <p className="text-lg">
                Our cutting-edge technology and innovative solutions will help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row justify-center">
                <Button>Get Started</Button>
                <Button className="bg-yellow-500">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="vision-mission" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  At Acme Inc, our vision is to be the leading provider of innovative technology solutions that empower businesses to thrive in the digital age. We are committed to pushing the boundaries of what's possible and delivering cutting-edge products that transform the way our clients operate.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  Our mission is to help our clients achieve their goals by providing them with the tools and resources they need to succeed. We believe in the power of collaboration and strive to build long-lasting partnerships with our customers, working closely with them to understand their unique challenges and develop tailored solutions that drive real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight">About Acme Inc</h2>
                <p className="mt-4 text-muted-foreground">
                  Acme Inc is a leading technology startup that specializes in providing innovative solutions to businesses of all sizes. Our team of experts is dedicated to helping our clients achieve their goals and stay ahead of the competition.
                </p>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="About Image"
                  className="max-w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Discover how our innovative solutions can help your business thrive.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <CheckIcon className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-bold">Scalability</h3>
                  <p className="text-muted-foreground">
                    Our platform is designed to scale with your business, ensuring you can handle any workload.
                  </p>
                </div>
                <div className="space-y-4">
                  <CheckIcon className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-bold">Security</h3>
                  <p className="text-muted-foreground">
                    Protect your data with our robust security features and compliance standards.
                  </p>
                </div>
                <div className="space-y-4">
                  <CheckIcon className="mx-auto h-12 w-12" />
                  <h3 className="text-xl font-bold">Performance</h3>
                  <p className="text-muted-foreground">
                    Our platform is optimized for lightning-fast performance, ensuring your users have a seamless experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">Choose the plan that best fits your business needs.</p>
              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for small businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold">$19</p>
                      <p className="text-muted-foreground">per month</p>
                    </div>
                    <ul className="mt-8 space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>5 GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>1 user</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>Basic support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button>Get Started</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Ideal for growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold">$49</p>
                      <p className="text-muted-foreground">per month</p>
                    </div>
                    <ul className="mt-8 space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>50 GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>5 users</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button>Get Started</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>Tailored for large enterprises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold">$99</p>
                      <p className="text-muted-foreground">per month</p>
                    </div>
                    <ul className="mt-8 space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>Unlimited storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>Unlimited users</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button>Get Started</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Have a question or want to learn more? Contact us today.
              </p>
              <form className="mx-auto max-w-md space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>

        <section id="team" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Our talented team of experts is dedicated to helping you succeed.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Team Member 1"
                    className="mx-auto rounded-full"
                  />
                  <h3 className="text-xl font-bold">Persona 1</h3>
                  <p className="text-muted-foreground">CEO</p>
                </div>
                <div className="space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Team Member 2"
                    className="mx-auto rounded-full"
                  />
                  <h3 className="text-xl font-bold">Persona 2</h3>
                  <p className="text-muted-foreground">CTO</p>
                </div>
                <div className="space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Team Member 3"
                    className="mx-auto rounded-full"
                  />
                  <h3 className="text-xl font-bold">Persona 3</h3>
                  <p className="text-muted-foreground">COO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
