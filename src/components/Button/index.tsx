import { Container } from "./styles";

export type ButtonProps = {
  variants: "download" | "trial";
};

export default function Button({ variants }: ButtonProps) {
  return (
    <Container variants={variants} href="/download">
      {variants === "download"
        ? "Download VSCO"
        : "Start your free 7-day trial"}
    </Container>
  );
}
