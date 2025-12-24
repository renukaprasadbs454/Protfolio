import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              my inbox is always open!
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:rpbs.454@gmail.com"
              className="glass rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">rpbs.454@gmail.com</p>
            </a>
            
            <a
              href="tel:+918861482004"
              className="glass rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <Phone className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 88614 82004</p>
            </a>
            
            <div className="glass rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group">
              <MapPin className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Bangalore, India</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:rpbs.454@gmail.com">
                <Send size={20} />
                Say Hello
              </a>
            </Button>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/RenukaPrasadB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/renuka-prasad-b-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
