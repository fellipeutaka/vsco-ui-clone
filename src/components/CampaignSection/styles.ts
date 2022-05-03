import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 12vh);
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
  font-size: 32px;
  font-size: 3.2rem;
  color: #fff;
  font-weight: 400;
  margin-bottom: 24px;
  margin-bottom: 2.4rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    & {
      text-align: center;
    }
  }
`;

export const ChevronDownButton = styled.button`
  color: #fff;
  position: absolute;
  bottom: 16px;
  align-self: center;
  z-index: 1;
  cursor: pointer;
  animation: bounce 1s infinite ease-out;
  border: none;
  background-color: transparent;

  svg {
    width: 32px;
    height: 32px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-16px);
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
