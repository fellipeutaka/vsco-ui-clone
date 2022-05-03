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
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  color: #fff;

  div {
    max-width: 256px;
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
