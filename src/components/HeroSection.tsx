import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Building2, Leaf, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Environmental sustainability background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Track • Reduce • Impact</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            CarbonWise
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive carbon footprint tracking for individuals and businesses. 
            Make data-driven decisions to reduce your environmental impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
            >
              Start Tracking
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* User Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-medium">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Individuals</h3>
            <p className="text-white/80 mb-6">
              Track your personal carbon footprint across energy, transportation, 
              food, and lifestyle choices.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Personal dashboards</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Leaf className="w-4 h-4" />
                <span>Sustainability tips</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-medium">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Businesses</h3>
            <p className="text-white/80 mb-6">
              Comprehensive corporate carbon tracking across operations, 
              supply chain, and product lifecycle.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Enterprise reporting</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Supply chain tracking</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;