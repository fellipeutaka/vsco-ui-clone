import CampaignSection from "./components/CampaignSection";
import ComparisonSection from "./components/ComparisonSection";
import CookieButton from "./components/CookieButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MembershipSection from "./components/MembershipSection";
import PillarsSection from "./components/PillarsSection";
import SupportSection from "./components/SupportSection";

export default function App() {
  return (
    <>
      <Header />
      <CampaignSection />
      <HeroSection />
      <PillarsSection />
      <MembershipSection />
      <ComparisonSection />
      <SupportSection />
      <Footer />
      <CookieButton />
    </>
  );
}
