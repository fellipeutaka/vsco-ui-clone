import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  width: 100%;
  height: 128vh;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  padding-top: 48px;
  padding-top: 4.8rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 480px;
    max-width: 48rem;

    ul {
      list-style: none;
      text-align: left;
      margin-top: 32px;
      margin-top: 3.2rem;
      display: flex;
      flex-direction: column;
      gap: 36px;
      gap: 3.6rem;

      li {
        position: relative;
        padding-left: 36px;
        padding-left: 3.6rem;
        letter-spacing: 0.5px;
        letter-spacing: 0.05rem;

        p {
          margin-top: 4px;
          margin-top: 0.4rem;
        }

        &::before {
          content: "→";
          position: absolute;
          left: 0;
          top: -8px;
          top: -0.8rem;
          font-size: 24px;
          font-size: 2.4rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
      padding: 24px;
      padding: 2.4rem;

      a {
        width: 100%;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 24px;
  margin-bottom: 2.4rem;
`;
