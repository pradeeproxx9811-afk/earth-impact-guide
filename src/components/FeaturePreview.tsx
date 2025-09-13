import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Target, 
  Lightbulb, 
  TrendingDown, 
  Award,
  Calendar,
  Smartphone,
  Shield
} from "lucide-react";

const FeaturePreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Carbon Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get insights, set goals, and take action with our comprehensive 
            carbon tracking and reduction platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Dashboard Preview */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Real-time Carbon Dashboard
            </h3>
            <p className="text-muted-foreground mb-6">
              Visualize your carbon footprint with interactive charts, progress tracking, 
              and detailed breakdowns by category. Monitor trends and identify 
              opportunities for reduction.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm">Interactive emission charts</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-success" />
                <span className="text-sm">Reduction trend analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <span className="text-sm">Goal progress tracking</span>
              </div>
            </div>
          </div>

          {/* Mock Dashboard */}
          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-foreground">Your Carbon Footprint</h4>
              <Badge className="bg-success text-success-foreground">-12% this month</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">2.4t</div>
                <div className="text-sm text-muted-foreground">CO₂ this month</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-success">15%</div>
                <div className="text-sm text-muted-foreground">Below target</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Transportation</span>
                  <span>1.2t CO₂</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Energy</span>
                  <span>0.8t CO₂</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Food</span>
                  <span>0.4t CO₂</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Smart Recommendations</h4>
            <p className="text-sm text-muted-foreground">
              Personalized tips and actionable advice to reduce your carbon footprint.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-success" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Goal Setting</h4>
            <p className="text-sm text-muted-foreground">
              Set and track carbon reduction goals with milestone celebrations.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Gamification</h4>
            <p className="text-sm text-muted-foreground">
              Earn badges and compete with friends to make sustainability engaging.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-info" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
            <p className="text-sm text-muted-foreground">
              Monitor your journey with detailed reports and trend analysis.
            </p>
          </Card>
        </div>

        {/* Technical Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Mobile-First Design</h4>
            <p className="text-sm text-muted-foreground">
              Responsive design optimized for tracking on the go.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Secure & Private</h4>
            <p className="text-sm text-muted-foreground">
              Your data is encrypted and stored securely in the cloud.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">API Integrations</h4>
            <p className="text-sm text-muted-foreground">
              Connect with smart meters and logistics systems for automatic tracking.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-hero shadow-strong max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Carbon Journey?
            </h3>
            <p className="text-white/90 mb-6">
              Join thousands of individuals and businesses making a real impact 
              on climate change through data-driven carbon management.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
            >
              Get Started Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;