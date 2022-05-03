import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.a<ButtonProps>`
  color: #fff;
  padding: 12px 16px;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  z-index: 99;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.variant === "black"
      ? css`
          border: 1px solid #000;
          background-color: #000;
        `
      : css`
          border: 1px solid #0000ff;
          background-color: #0000ff;
        `}
`;
