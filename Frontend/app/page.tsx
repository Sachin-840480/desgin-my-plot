import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

export default function HomePage() {
  return (
    <div>
    <AgencyHeroSection />
    <Faq/>
    <CTA/>
    <Footer/>
    </div>
  )
}
