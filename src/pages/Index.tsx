
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "SamScripts - IT Services & Software Solutions";
    
    // Smooth scroll function
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" && 
        target.href && 
        target.href.includes("#") && 
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for navbar height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleHashLinkClick);

    return () => {
      document.removeEventListener("click", handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      
      {/* Featured Work/Portfolio Section */}
      <section id="work" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="heading-lg mb-4">Our Featured Work</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Explore our portfolio of successful projects across different industries.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={(item - 1) * 100}>
                <div className="rounded-lg overflow-hidden bg-white shadow-lg card-hover">
                  <div className="h-60 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-medium text-foreground/40">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                    <p className="text-foreground/70 mb-4">
                      A brief description of the project, highlighting the key features and technologies used.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">React</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-foreground/10 text-foreground text-sm rounded-full">AWS</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <ScrollReveal>
              <button className="btn-outline">
                View All Projects
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="h-96 rounded-lg bg-gradient-to-r from-secondary/30 to-accent/30 flex items-center justify-center">
                <span className="text-2xl font-medium text-foreground/40">Company Image</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="heading-lg mb-6">About SamScripts</h2>
              <p className="text-lg mb-6 text-foreground/70">
                Founded in 2020, SamScripts has quickly established itself as a trusted partner for businesses seeking high-quality IT services and software solutions. We bring together a talented team of developers, designers, and strategists to help our clients succeed in today's digital landscape.
              </p>
              <p className="text-lg mb-8 text-foreground/70">
                Our mission is to transform your ideas into digital excellence through innovative technologies, superior craftsmanship, and a deep understanding of your business goals.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <p className="text-sm text-foreground/70">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <p className="text-sm text-foreground/70">Happy Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <p className="text-sm text-foreground/70">Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">5</div>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
