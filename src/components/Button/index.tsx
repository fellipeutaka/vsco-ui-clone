import { ReactNode } from "react";
import { Container } from "./styles";

export type ButtonProps = {
  variant: "black" | "blue";
  children: ReactNode;
};

export default function Button({ variant, children }: ButtonProps) {
  return (
    <Container variant={variant} href="/download">
      {children}
    </Container>
  );
}
