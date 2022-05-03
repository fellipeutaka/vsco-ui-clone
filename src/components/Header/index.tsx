import { AiOutlineSearch } from "react-icons/ai";
import { SiVsco } from "react-icons/si";
import { Container, GetAppButton, Logo, NavList, SearchButton } from "./styles";

const navLinks = [
  { title: "My home", path: "/feed" },
  { title: "Sign In", path: "/feed" },
  { title: "Support", path: "/feed" },
  { title: "Community", path: "/feed" },
];

export default function Header() {
  return (
    <Container>
      <SearchButton title="Search" href="/search">
        <AiOutlineSearch size="24px" />
      </SearchButton>
      <Logo href="/">
        <SiVsco size="32px" />
      </Logo>
      <nav>
        <NavList>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
          <li>
            <GetAppButton>Get the app</GetAppButton>
          </li>
        </NavList>
      </nav>
    </Container>
  );
}
