import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    & {
      height: 200vh;
      grid-template-columns: 1fr;
    }
  }
`;

export const SupportContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #edbb3a;
  padding-left: 64px;
  padding-left: 6.4rem;
  gap: 16px;
  gap: 1.6rem;

  img {
    max-width: 268px;
    max-width: 26.8rem;
  }

  h1 {
    font-size: 32px;
    font-size: 3.2rem;
    font-weight: 500;
  }

  p {
    font-weight: 500;
    line-height: 24px;
    line-height: 2.4rem;
    max-width: 380px;
    max-width: 38rem;
  }

  a {
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    & {
      height: 100vh;
    }
  }
`;

export const CommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #f3b2bc;
  padding-left: 64px;
  padding-left: 6.4rem;
  gap: 16px;
  gap: 1.6rem;

  img {
    max-width: 268px;
    max-width: 26.8rem;
  }

  h1 {
    font-size: 32px;
    font-size: 3.2rem;
    font-weight: 500;
  }

  p {
    font-weight: 500;
    line-height: 24px;
    line-height: 2.4rem;
    max-width: 380px;
    max-width: 38rem;
  }

  a {
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    & {
      height: 100vh;
    }
  }
`;
