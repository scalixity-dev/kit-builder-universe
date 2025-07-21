import { useEffect, useState } from 'react';

const MottoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start description animation after typing completes
            setTimeout(() => setTypingComplete(true), 3500);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('motto-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="motto-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-5xl lg:text-7xl font-bold text-foreground mb-8 ${
            isVisible ? 'animate-typing' : 'opacity-0'
          }`}>
            <span className="text-primary">Learn.</span>{' '}
            <span className="text-accent">Build.</span>{' '}
            <span className="text-accent-blue">Earn.</span>
          </h2>
          
          <p className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed transition-all duration-1000 ${
            typingComplete ? 'animate-fade-in' : 'opacity-0'
          }`}>
            Empowering all ages through hands-on learning & real-world building.
            <br />
            Transform curiosity into capability, ideas into innovation.
          </p>

          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            typingComplete ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Learn</h3>
              <p className="text-muted-foreground text-center">
                Master essential skills through interactive, project-based education
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">Build</h3>
              <p className="text-muted-foreground text-center">
                Create real solutions and bring your innovative ideas to life
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-blue mb-2">Earn</h3>
              <p className="text-muted-foreground text-center">
                Develop valuable skills that open doors to new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;