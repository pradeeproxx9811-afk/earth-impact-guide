import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Car, 
  UtensilsCrossed, 
  ShoppingBag, 
  Trash2, 
  Droplets,
  Zap,
  Truck,
  Package,
  Building,
  Plane,
  Recycle
} from "lucide-react";

const individualCategories = [
  {
    icon: Home,
    title: "Energy at Home",
    description: "kWh consumed, heating/cooling fuel, renewable energy",
    badge: "Personal",
    items: ["Electricity usage", "Gas consumption", "Solar panels", "HVAC systems"]
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Vehicle type, km traveled, public transport, flights",
    badge: "Personal",
    items: ["Car journeys", "Public transport", "Flights", "Cycling/Walking"]
  },
  {
    icon: UtensilsCrossed,
    title: "Food Consumption",
    description: "Kg of meat, dairy, plant-based foods, packaged foods",
    badge: "Personal", 
    items: ["Meat consumption", "Dairy products", "Plant-based meals", "Food waste"]
  },
  {
    icon: ShoppingBag,
    title: "Goods & Services",
    description: "Electronics, clothing, purchases impact",
    badge: "Personal",
    items: ["Electronics", "Clothing", "Online shopping", "Services"]
  },
  {
    icon: Trash2,
    title: "Waste & Recycling",
    description: "Kg of waste generated, recycled materials",
    badge: "Personal",
    items: ["General waste", "Recycling", "Composting", "E-waste"]
  },
  {
    icon: Droplets,
    title: "Water Usage",
    description: "Liters or cubic meters of water used",
    badge: "Personal",
    items: ["Household usage", "Garden watering", "Pool maintenance", "Leaks"]
  }
];

const businessCategories = [
  {
    icon: Zap,
    title: "Energy Consumption",
    description: "Total kWh used, energy type, renewable percentage",
    badge: "Business",
    items: ["Office electricity", "Manufacturing power", "Renewable sources", "Energy efficiency"]
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Fleet size, fuel type, km traveled, deliveries",
    badge: "Business",
    items: ["Company vehicles", "Delivery fleet", "Fuel consumption", "Route optimization"]
  },
  {
    icon: Package,
    title: "Raw Materials & Supply Chain",
    description: "Material quantities, sourcing data, supplier emissions",
    badge: "Business",
    items: ["Raw materials", "Supplier data", "Packaging", "Shipping"]
  },
  {
    icon: Building,
    title: "Operations & Facilities",
    description: "Facility size, HVAC usage, manufacturing emissions",
    badge: "Business",
    items: ["Office space", "Manufacturing", "HVAC systems", "Equipment"]
  },
  {
    icon: Plane,
    title: "Business Travel",
    description: "Trips, flights, car rentals, accommodation",
    badge: "Business",
    items: ["Flight bookings", "Hotel stays", "Car rentals", "Conferences"]
  },
  {
    icon: Recycle,
    title: "Carbon Offsets",
    description: "Carbon credits purchased, reduction initiatives",
    badge: "Business",
    items: ["Offset programs", "Green initiatives", "Carbon credits", "Sustainability projects"]
  }
];

const TrackingCategories = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Carbon Tracking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track emissions across all aspects of your lifestyle or business operations 
            with our detailed category system and emission factor calculations.
          </p>
        </div>

        {/* Individual Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Individual Tracking Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {category.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Categories */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Business Tracking Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        {category.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingCategories;