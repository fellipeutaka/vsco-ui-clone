import DownloadButton from "../DownloadButton";
import { BgImg, Container, Title } from "./styles";

export default function HeroSection() {
  return (
    <Container>
      <Title>Make it Anyway. Make it with VSCO.</Title>
      <DownloadButton content="Download VSCO" />
      <BgImg
        src="https://assets.vsco.co/assets/images/homepage-2020/montage-hero_2.jpg"
        alt="Background image"
      />
    </Container>
  );
}
