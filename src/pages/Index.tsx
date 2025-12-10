import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { PopularCalculators } from "@/components/home/PopularCalculators";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <PopularCalculators />
    </Layout>
  );
};

export default Index;
