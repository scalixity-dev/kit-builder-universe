import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

// Import kit images
import kitElectronics from '@/assets/kit-electronics.jpg';
import kitCoding from '@/assets/kit-coding.jpg';
import kit3D from '@/assets/kit-3d.jpg';
import kitScience from '@/assets/kit-science.jpg';
import kitEnergy from '@/assets/kit-energy.jpg';
import kitGaming from '@/assets/kit-gaming.jpg';

const kits = [
  {
    id: 1,
    title: 'Electronics & Robotics',
    image: kitElectronics,
    description: 'Build smart devices and robots while learning electronics fundamentals.',
    features: [
      'Arduino programming',
      'Sensor integration',
      'Motor control systems',
      'Wireless communication',
      'Real-world projects'
    ],
    color: 'orange'
  },
  {
    id: 2,
    title: 'Coding & Programming',
    image: kitCoding,
    description: 'Master programming languages through interactive projects and games.',
    features: [
      'Web development',
      'Mobile app creation',
      'Game programming',
      'Database management',
      'API integration'
    ],
    color: 'teal'
  },
  {
    id: 3,
    title: '3D Design & Printing',
    image: kit3D,
    description: 'Create and prototype your ideas with 3D modeling and printing technology.',
    features: [
      'CAD software mastery',
      '3D printing techniques',
      'Product prototyping',
      'Design thinking',
      'Material science'
    ],
    color: 'blue'
  },
  {
    id: 4,
    title: 'Science Lab',
    image: kitScience,
    description: 'Conduct experiments and discover scientific principles through hands-on research.',
    features: [
      'Chemistry experiments',
      'Physics demonstrations',
      'Data analysis',
      'Laboratory techniques',
      'Scientific method'
    ],
    color: 'green'
  },
  {
    id: 5,
    title: 'Renewable Energy',
    image: kitEnergy,
    description: 'Explore sustainable energy solutions and environmental technologies.',
    features: [
      'Solar panel systems',
      'Wind energy generation',
      'Energy storage',
      'Environmental monitoring',
      'Sustainability projects'
    ],
    color: 'purple'
  },
  {
    id: 6,
    title: 'Game Development',
    image: kitGaming,
    description: 'Design and develop interactive games while learning digital media skills.',
    features: [
      'Game engine mastery',
      'Character design',
      'Level creation',
      'Audio production',
      'Publishing strategies'
    ],
    color: 'red'
  }
];

const KitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'border-primary/20 hover:border-primary/40',
      teal: 'border-accent/20 hover:border-accent/40',
      blue: 'border-accent-blue/20 hover:border-accent-blue/40',
      green: 'border-green-500/20 hover:border-green-500/40',
      purple: 'border-purple-500/20 hover:border-purple-500/40',
      red: 'border-red-500/20 hover:border-red-500/40'
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <section id="kits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Educational <span className="text-primary">Kits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive collection of hands-on learning experiences, 
            each designed to build real-world skills and inspire innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {kits.map((kit, index) => (
            <Card
              key={kit.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`hover-lift border-2 transition-all duration-500 ${getColorClasses(kit.color)} ${
                visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Image and Description */}
                  <div>
                    <img 
                      src={kit.image} 
                      alt={kit.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {kit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {kit.description}
                    </p>
                  </div>

                  {/* Right: Features List */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        What You'll Learn:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {kit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitsSection;