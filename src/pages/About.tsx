
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    document.title = "About Us | SamScripts - IT Services & Software Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blur-gradient opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="heading-xl text-center mb-6">
              About <span className="gradient-text">SamScripts</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-12">
              We help businesses transform and thrive in the digital age through innovative technologies and strategic solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="SamScripts Team" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-lg -z-10"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-lg text-foreground/70 mb-6">
                Founded in 2020, SamScripts began with a simple mission: to make high-quality software development accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a comprehensive IT services company serving clients across the US and UK markets.
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                We believe that technology should simplify, not complicate. This philosophy guides our approach to every project, ensuring we deliver solutions that address real business challenges while being intuitive and user-friendly.
              </p>
              <p className="text-lg text-foreground/70">
                As we continue to grow, our commitment remains the same - to transform ideas into digital excellence through innovative technologies, superior craftsmanship, and a deep understanding of our clients' business goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16">Mission & Values</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-foreground/70">
                  To empower businesses through technology, delivering innovative digital solutions that drive growth, enhance efficiency, and create exceptional user experiences.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Excellence:</span>
                    <span className="text-foreground/70">We strive for excellence in every line of code we write and every solution we deliver.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Innovation:</span>
                    <span className="text-foreground/70">We embrace new technologies and approaches to solve complex problems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Integrity:</span>
                    <span className="text-foreground/70">We build relationships based on trust, transparency, and ethical business practices.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Collaboration:</span>
                    <span className="text-foreground/70">We work closely with our clients, becoming an extension of their team.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16">Meet Our Team</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "David Williams",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "With 15+ years in software development, David founded SamScripts to help businesses leverage technology effectively."
              },
              {
                name: "Emily Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Emily leads our technical strategy and ensures we're always at the cutting edge of technology trends."
              },
              {
                name: "James Rodriguez",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "James brings a wealth of experience in full-stack development and leads our development team."
              },
              {
                name: "Sophia Kim",
                role: "UI/UX Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Sophia creates beautiful, intuitive user interfaces that enhance user experience and drive engagement."
              },
              {
                name: "Michael Patel",
                role: "DevOps Engineer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Michael ensures our infrastructure is scalable, secure, and running smoothly."
              },
              {
                name: "Olivia Jackson",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Olivia keeps projects on track, ensuring they're delivered on time and within budget."
              },
              {
                name: "Daniel Lee",
                role: "Mobile Developer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Daniel specializes in creating seamless mobile experiences across iOS and Android platforms."
              },
              {
                name: "Rachel Thompson",
                role: "Marketing Director",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                bio: "Rachel helps our clients tell their stories and reach their target audiences effectively."
              }
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-interactive bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                        <p className="text-white/80">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-foreground/70">{member.bio}</p>
                    <div className="flex mt-4 space-x-3">
                      <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-foreground/60 hover:text-secondary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
                <p className="text-lg mb-8 text-white/80">
                  Join the hundreds of businesses that have transformed their digital presence with SamScripts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors hover-float">
                    Get in Touch
                  </a>
                  <a href="/services" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors hover-float">
                    Our Services
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-5 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">100+</p>
                  <p className="text-white/80">Projects Completed</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
                  <p className="text-white/80">Happy Clients</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">20+</p>
                  <p className="text-white/80">Team Members</p>
                </div>
                <div className="bg-white/10 p-5 rounded-lg">
                  <p className="text-3xl md:text-4xl font-bold mb-2">5</p>
                  <p className="text-white/80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
