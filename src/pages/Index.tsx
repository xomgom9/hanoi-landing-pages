import HeroSection from "@/components/HeroSection";
import StaircaseSection from "@/components/StaircaseSection";
import ElevatorSection from "@/components/ElevatorSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import SampleSection from "@/components/SampleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StaircaseSection />
      <ElevatorSection />
      <WhyChooseSection />
      <ProjectsSection />
      <SampleSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButtons />
    </main>
  );
};

export default Index;
