
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold gradient-text">SamScripts</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Expertise
            </a>
            <a href="#work" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Work
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              About
            </a>
            <Button className="btn-primary">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fade-in">
            <a 
              href="#services" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors px-2 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#expertise" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors px-2 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#work" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors px-2 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors px-2 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button className="btn-primary w-full">
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
