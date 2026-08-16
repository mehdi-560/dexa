// dexent/app/page.tsx
import HeroSection from "@/components/hero/HeroSection";
import StickerBanner from "@/components/home/StickerBanner";
import StatsStrip from "@/components/home/StatsStrip";
import EquipmentGrid from "@/components/home/EquipmentGrid";
import PricingTiers from "@/components/home/PricingTiers";
import WhyEightPercent from "@/components/home/WhyEightPercent";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { HOME_FAQS } from "@/content/faqs";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Truck Dispatch Service",
          description: SITE.description,
          url: SITE.domain,
        })}
      />
      <JsonLd data={faqSchema(HOME_FAQS.map((f) => ({ q: f.q, a: f.a })))} />

      <HeroSection />

      {/* Position 2: sticker promo */}
      <StickerBanner />

      <StatsStrip />

      <Reveal><EquipmentGrid /></Reveal>
      <Reveal><PricingTiers /></Reveal>
      <Reveal><WhyEightPercent /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><FAQ /></Reveal>

      <FinalCTA />
    </>
  );
}