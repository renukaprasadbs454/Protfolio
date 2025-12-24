import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Renuka Prasad B.S | Backend Developer & Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Renuka Prasad B.S - Backend Developer specializing in microservices, RESTful APIs, and full-stack development. Currently pursuing B.E at M.S Ramaiah Institute of Technology."
        />
        <meta
          name="keywords"
          content="Renuka Prasad, Backend Developer, Software Engineer, React, Node.js, Python, Microservices, API Development, Bangalore"
        />
        <meta property="og:title" content="Renuka Prasad B.S | Backend Developer" />
        <meta
          property="og:description"
          content="Portfolio of Renuka Prasad B.S - Backend Developer specializing in microservices, RESTful APIs, and full-stack development."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://renukaprasad.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
