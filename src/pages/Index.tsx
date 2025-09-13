import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrackingCategories from "@/components/TrackingCategories";
import FeaturePreview from "@/components/FeaturePreview";
import SupabaseNotice from "@/components/SupabaseNotice";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrackingCategories />
      <FeaturePreview />
      <SupabaseNotice />
    </div>
  );
};

export default Index;
