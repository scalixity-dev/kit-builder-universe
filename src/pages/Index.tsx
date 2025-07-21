import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import KitsSection from '@/components/KitsSection';
import AIAgentSection from '@/components/AIAgentSection';
import AgeExperienceSection from '@/components/AgeExperienceSection';
import MottoSection from '@/components/MottoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <KitsSection />
      <AIAgentSection />
      <AgeExperienceSection />
      <MottoSection />
      <Footer />
    </div>
  );
};

export default Index;
