import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 12vh;
  padding: 0 24px;
  padding: 0 2.4rem;

  @media screen and (max-width: 768px) {
    & {
      background-color: #000000;
    }
  }
`;

export const SearchButton = styled.a`
  color: #000000;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    & {
      color: #fff;
    }
  }
`;

export const Logo = styled.a`
  color: #000000;
  margin: 0 192px 0 auto;
  margin: 0 19.2rem 0 auto;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    & {
      color: #fff;
      margin: 0 0 0 auto;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  gap: 2.4rem;

  a {
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-size: 1.4rem;

    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const GetAppButton = styled.a`
  color: #fff !important;
  padding: 12px 24px;
  padding: 1.2rem 2.4rem;
  border: 1px solid #000000;
  background-color: #000000;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #fff;
    color: #000000 !important;
    opacity: 1 !important;
  }
`;
