import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 64px;
  padding: 0 6.4rem;
  position: sticky;
  top: 0;
  text-align: center;
  background-color: #000;
  gap: 16px;
  gap: 1.6rem;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-size: 7.2rem;
  color: #fff;
  font-weight: 800;
  z-index: 1;
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-size: 2rem;
  color: #fff;
  font-weight: 400;
  z-index: 1;
  max-width: 360px;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  overflow: hidden;
  filter: blur(2px);
  opacity: 0.5;
`;
