import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 64px 24px;
  padding: 6.4rem 2.4rem;
  position: absolute;

  .links {
    display: flex;
    gap: 128px;
    gap: 12.8rem;
    font-size: 12px;
    font-size: 1.2rem;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 8px;
      gap: 0.8rem;
      font-size: inherit;

      h2 {
        font-size: inherit;
        font-weight: 700;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-weight: 400;

        &:hover {
          color: #ae995a;
        }
      }
    }
  }

  .rights {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    & {
      flex-direction: column;
      gap: 48px;
      gap: 4.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      .links {
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 16px;
        font-size: 1.6rem;

        gap: 64px;
        gap: 6.4rem;
      }
    }
  }
`;
