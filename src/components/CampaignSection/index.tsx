import { useEffect, useState } from "react";
import DownloadButton from "../DownloadButton";
import { BgImg, ChevronDown, Container, Title } from "./styles";

export default function CampaignSection() {
  const colors = ["yellow", "red", "green"];
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

  return (
    <Container>
      <Title>Where expression matters most.</Title>
      <DownloadButton content="Download VSCO" />
      <ChevronDown />
      <BgImg
        src={`https://assets.vsco.co/assets/images/homepage-2020/reflect-campaign_desktop_${colors[currentImgIndex]}.jpg`}
        alt="Background image"
      />
    </Container>
  );
}
