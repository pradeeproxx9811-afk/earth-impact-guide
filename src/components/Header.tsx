import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CarbonWise</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#tracking" className="text-muted-foreground hover:text-foreground transition-colors">
              Tracking
            </a>
            <a href="#business" className="text-muted-foreground hover:text-foreground transition-colors">
              For Business
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground">
              Sign In
            </Button>
            <Button className="bg-gradient-green text-white hover:opacity-90 shadow-soft">
              Start Tracking
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;