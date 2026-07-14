import SEO from "@/components/layout/SEO";
import Hero from "@/components/home/Hero";
import ProxySection from "@/components/home/ProxySection";
import HowItWorks from "@/components/home/HowItWorks";
import SourcesSection from "@/components/home/SourcesSection";
import ChannelsSection from "@/components/home/ChannelsSection";
import { SITE } from "@/data/content";

export default function Home() {
  return (
    <>
      <SEO title={SITE.name} path="/" />
      <Hero />
      <ProxySection />
      <HowItWorks />
      <SourcesSection />
      <ChannelsSection />
    </>
  );
}
