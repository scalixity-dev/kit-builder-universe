import { Button } from '@/components/ui/button';
import { Sparkles, Brain, Target } from 'lucide-react';
import aiAssistant from '@/assets/ai-assistant.jpg';

const AIAgentSection = () => {
  return (
    <section id="ai-agent" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: AI Illustration */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={aiAssistant} 
                alt="AI Assistant" 
                className="w-full h-auto max-w-md mx-auto animate-glow-pulse rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-cyan/20 rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent-blue rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-0 w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <span className="text-lg font-semibold text-accent">AI-Powered Recommendations</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Use our <span className="text-accent">AI agent</span> to recommend the perfect kit for you
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our intelligent recommendation system analyzes your interests, experience level, 
              and learning goals to suggest the ideal educational kit for your journey.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Smart Analysis</h3>
                  <p className="text-muted-foreground">AI analyzes your survey responses to understand your unique learning style and preferences.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Matching</h3>
                  <p className="text-muted-foreground">Get matched with kits that align perfectly with your goals and current skill level.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow-pulse"
            >
              Get Personalized Recommendation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;