import { useCallback, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "../Button";
import { BgImg, ChevronDownButton, Container, Title } from "./styles";

const colors = ["yellow", "red", "green"];

export default function CampaignSection() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((state) =>
        state + 1 === colors.length ? 0 : state + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImgIndex]);

  const navigateToHeroSection = useCallback(() => {
    document.querySelector("section#hero")?.scrollIntoView();
  }, []);

  return (
    <Container>
      <Title>Where expression matters most.</Title>
      <Button variant="black">Download VSCO</Button>

      <ChevronDownButton onClick={navigateToHeroSection}>
        <FiChevronDown />
      </ChevronDownButton>
      <BgImg
        src={`https://assets.vsco.co/assets/images/homepage-2020/reflect-campaign_desktop_${colors[currentImgIndex]}.jpg`}
        alt="Background image"
      />
    </Container>
  );
}
