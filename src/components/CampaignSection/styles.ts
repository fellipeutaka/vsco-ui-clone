import { FiChevronDown } from "react-icons/fi";
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
`;

export const ChevronDown = styled(FiChevronDown)`
  color: #fff;
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 16px;
  align-self: center;
  z-index: 1;

  animation: bounce 1s infinite ease-out;

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
