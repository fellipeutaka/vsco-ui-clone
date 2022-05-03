import Button from "../Button";
import { CommunityContainer, Container, SupportContainer } from "./styles";

export default function SupportSection() {
  return (
    <Container>
      <SupportContainer>
        <img
          src="https://vscoassets.s3.amazonaws.com/assets/images/get-support-cta.jpg"
          alt="Photograph of young woman sitting"
        />
        <h1>Get Support.</h1>
        <p>
          Visit our support page to get the help you need, and make sure
          you&apos;re getting the most out of VSCO.
        </p>
        <Button variant="black">Get support</Button>
      </SupportContainer>
      <CommunityContainer>
        <img
          src="https://vscoassets.s3.amazonaws.com/assets/images/visit-community-cta.jpg"
          alt="Photograph of young woman sitting"
        />
        <h1>Visit the community.</h1>
        <p>
          Have a feature request? Want to interact with other creators on VSCO
          and the VSCO team?
        </p>
        <Button variant="black">Visit the Community</Button>
      </CommunityContainer>
    </Container>
  );
}
