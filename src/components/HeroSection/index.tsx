import Button from "../Button";
import { BgImg, Container, Title } from "./styles";

export default function HeroSection() {
  return (
    <Container id="hero">
      <Title>Make it Anyway. Make it with VSCO.</Title>
      <Button variants="download" />
      <BgImg
        src="https://assets.vsco.co/assets/images/homepage-2020/montage-hero_2.jpg"
        alt="Background image"
      />
    </Container>
  );
}
