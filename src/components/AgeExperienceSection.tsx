import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Laptop, GraduationCap } from 'lucide-react';

const ageGroups = [
  {
    id: 1,
    title: 'Kids (6-12)',
    description: 'Playful, hands-on learning experiences that spark curiosity and creativity through fun, age-appropriate projects.',
    icon: Gamepad2,
    features: ['Visual programming', 'Building blocks', 'Interactive games', 'Colorful projects'],
    bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-100',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-200'
  },
  {
    id: 2,
    title: 'Teens (13-17)',
    description: 'Challenge-based learning that develops technical skills and prepares students for advanced studies and careers.',
    icon: Laptop,
    features: ['Real coding', 'Team projects', 'Competitions', 'Portfolio building'],
    bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-200'
  },
  {
    id: 3,
    title: 'Adults (18+)',
    description: 'Professional-grade learning experiences focused on career development and practical skill acquisition.',
    icon: GraduationCap,
    features: ['Industry projects', 'Certification paths', 'Mentorship', 'Career support'],
    bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100',
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-200'
  }
];

const AgeExperienceSection = () => {
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

  return (
    <section id="age-experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learning <span className="text-primary">For Every Age</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our educational approach adapts to different learning styles and developmental stages, 
            ensuring an optimal experience for learners of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card
                key={group.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`hover-lift border-2 transition-all duration-500 ${group.borderColor} ${
                  visibleCards.includes(index) ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className={`p-8 ${group.bgColor} rounded-lg`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${group.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {group.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {group.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Explore {group.title.split(' ')[0]} Kits
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgeExperienceSection;