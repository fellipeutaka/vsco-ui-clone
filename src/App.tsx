import CampaignSection from "./components/CampaignSection";
import CookieButton from "./components/CookieButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MembershipSection from "./components/MembershipSection";
import PillarsSection from "./components/PillarsSection";

export default function App() {
  return (
    <>
      <Header />
      <CampaignSection />
      <HeroSection />
      <PillarsSection />
      <MembershipSection />
      <Footer />
      <CookieButton />
    </>
  );
}
