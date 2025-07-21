import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-students.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn Through{' '}
              <span className="text-primary">Hands-On</span>{' '}
              Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our curated educational kits designed to inspire creativity, 
              build practical skills, and prepare learners for the future through 
              engaging, project-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore Kits
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students working with educational kits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-wave"></div>
      </div>
    </section>
  );
};

export default HeroSection;