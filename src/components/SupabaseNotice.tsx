import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Database, Shield, Zap, Users } from "lucide-react";

const SupabaseNotice = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Alert className="max-w-4xl mx-auto mb-8 border-warning bg-warning/10">
          <Zap className="h-4 w-4 text-warning" />
          <AlertDescription className="text-foreground">
            <strong>Ready for Backend Integration:</strong> To enable carbon tracking, 
            user authentication, data storage, and emission calculations, connect this 
            project to Supabase using the green button in the top right corner.
          </AlertDescription>
        </Alert>

        <Card className="p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Enable Full CarbonWise Functionality
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect to Supabase to unlock the complete carbon tracking experience 
              with secure data storage, user authentication, and real-time calculations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Secure Authentication</h4>
              <p className="text-sm text-muted-foreground">
                Email/password login with secure user management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Storage</h4>
              <p className="text-sm text-muted-foreground">
                Store carbon data, tracking history, and user preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Real-time Calculations</h4>
              <p className="text-sm text-muted-foreground">
                Process emission factors and generate reports
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-info" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Multi-user Support</h4>
              <p className="text-sm text-muted-foreground">
                Individual and business account management
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Once connected, I'll implement the complete tracking system with:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
              <div className="space-y-2">
                <div>✓ Carbon emission calculations using standard factors</div>
                <div>✓ Interactive data entry forms for all categories</div>
                <div>✓ Real-time dashboard with charts and analytics</div>
              </div>
              <div className="space-y-2">
                <div>✓ Goal setting and progress tracking</div>
                <div>✓ Personalized sustainability recommendations</div>
                <div>✓ Export reports and data visualization</div>
              </div>
            </div>
            <Button className="bg-gradient-green text-white hover:opacity-90 shadow-medium">
              Connect Supabase to Continue
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SupabaseNotice;