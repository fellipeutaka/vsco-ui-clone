import Button from "../Button";
import { BgImg, Container, SubTitle, Title } from "./styles";

export default function MembershipSection() {
  return (
    <Container>
      <Title>Become a member</Title>
      <SubTitle>
        Get the latest tools and exclusive inspirational content with
        VSCO&nbsp;membership.
      </SubTitle>
      <Button variant="blue">Start your free 7-day trial</Button>
      <BgImg
        src="https://assets.vsco.co/assets/images/homepage-2020/montage-hero_3@2x.jpg"
        alt="Background image"
      />
    </Container>
  );
}
