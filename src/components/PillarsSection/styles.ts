import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #000;
  padding: 64px 0 128px;
  padding: 6.4rem 0 12.8rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-size: 3.2rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin-bottom: 128px;
  margin-bottom: 12.8rem;

  @media screen and (max-width: 768px) {
    & {
      font-size: 2.4rem;
      width: 80%;
    }
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10vw;
  color: #fff;

  div {
    max-width: 256px;
  }

  @media screen and (max-width: 1024px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  gap: 1.6rem;
  margin-bottom: 12px;
  margin-bottom: 1.2rem;
`;
