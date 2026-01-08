import HeroSection from "@/components/HeroSection";
import StaircaseSection from "@/components/StaircaseSection";
import ElevatorSection from "@/components/ElevatorSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import SampleSection from "@/components/SampleSection";
import ReasonsSection from "@/components/ReasonsSection";
import OtherProductsSection from "@/components/OtherProductsSection";
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
      <ReasonsSection />
      <OtherProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButtons />
    </main>
  );
};

export default Index;
