import Button from "../Button";
import { Container, SubTitle, Title } from "./styles";

export default function ComparisonSection() {
  return (
    <Container>
      <div>
        <Title>VSCO</Title>
        <SubTitle>Free</SubTitle>
        <Button variant="black">Download VSCO</Button>
        <ul>
          <li>
            <h4>Basic VSCO Presets</h4>
            <p>Enhance your photos with VSCO&apos;s original presets</p>
          </li>
          <li>
            <h4>Standard Editing Tools</h4>
            <p>Edit with standard tools like Contrast, Saturation, and Grain</p>
          </li>
          <li>
            <h4>Content in Discover</h4>
            <p>Explore community spotlights and inspiring content</p>
          </li>
        </ul>
      </div>
      <div>
        <Title>VSCO Membership</Title>
        <SubTitle>Monthly or Annual Subscription</SubTitle>
        <Button variant="blue">Start your free 7-day trial</Button>
        <ul>
          <li>
            <h4>200+ VSCO Presets</h4>

            <p>
              Unlock VSCO&apos;s complete preset library, including vintage Film
              looks by Kodak, Agfa, and Ilford
            </p>
          </li>
          <li>
            <h4>Advanced Photo Editing Tools</h4>
            <p>
              Create images you love with exclusive tools like HSL and Borders
            </p>
          </li>
          <li>
            <h4>Video Editing Tools</h4>
            <p>
              Transform videos with VSCO presets and special video editing tools
            </p>
          </li>
          <li>
            <h4>Montage</h4>
            <p>
              Tell a video story and make a moving collage by layering videos,
              images, and shapes
            </p>
          </li>
          <li>
            <h4>Weekly Photo Challenges</h4>
            <p>Try something new with weekly photo challenges</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}
