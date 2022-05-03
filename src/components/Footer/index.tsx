import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="links">
        <ul>
          <h2>Company</h2>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
        </ul>
        <ul>
          <h2>Community</h2>
          <li>
            <a href="/guidelines">Guidelines</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/redeem">Redeem</a>
          </li>
        </ul>
        <ul>
          <h2>Legal</h2>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a>Cookies Settings</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/disclosures">Disclosures</a>
          </li>
        </ul>
        <ul>
          <h2>Contact</h2>
          <li>
            <a href="/brands">Brands</a>
          </li>
          <li>
            <a href="press">Press</a>
          </li>
        </ul>
      </div>
      <div className="rights">
        <small>© VSCO 2022. All rights reserved.</small>
        <small>
          Developed with <span role="img">❤️</span> by Fellipe Utaka
        </small>
      </div>
    </Container>
  );
}
