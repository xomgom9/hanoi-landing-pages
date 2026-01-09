import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StaircaseSection from "@/components/StaircaseSection";
import ElevatorSection from "@/components/ElevatorSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import SampleSection from "@/components/SampleSection";
import ReasonsSection from "@/components/ReasonsSection";
import OtherProductsSection from "@/components/OtherProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StaircaseSection />
      <ElevatorSection />
      <WhyChooseSection />
      <ProjectsSection />
      <SampleSection />
      <ReasonsSection />
      <OtherProductsSection />
      <TestimonialsSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
