import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 64px;
  padding: 0 6.4rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    & {
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-size: 2.4rem;
  color: #fff;
  font-weight: 400;
  margin-bottom: 24px;
  margin-bottom: 2.4rem;
  z-index: 1;
  max-width: 16ch;

  @media screen and (max-width: 768px) {
    & {
      text-align: center;
    }
  }
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  overflow: hidden;
`;
