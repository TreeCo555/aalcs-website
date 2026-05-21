import ServicesHero from "@/components/services/ServicesHero";
import LawnMowingPackages from "@/components/services/LawnMowingPackages";
import GardeningServices from "@/components/services/GardeningServices";
import PropertyCareServices from "@/components/services/PropertyCareServices";
import WhyChooseAALCS from "@/components/services/WhyChooseAALCS";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <ServicesHero />
      <LawnMowingPackages />
      <GardeningServices />
      <PropertyCareServices />
      <WhyChooseAALCS />
      <ServicesCTA />
    </main>
  );
}