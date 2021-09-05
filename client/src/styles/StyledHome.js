import styled from "styled-components";

const StyledHome = styled.div`
  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column-reverse;

    margin: 5rem 0;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    @media (min-width: 993px) {
      flex-direction: row;
      margin: 10rem 0;
    }

    .phone {
      .frame {
        position: relative;
        text-align: center;
      }

      .frame-minimal-phone {
        border-radius: 24px;
        max-width: 260px;
        margin: 0 auto;
        padding: 8px;
        padding-top: 20px;
        background-image: linear-gradient(to right, #434343 0%, black 100%);
        box-shadow: 0px 8px 16px 0px rgba(18, 1, 64, 0.1);
        @media (min-width: 993px) {
          max-width: 360px;
        }
        &::before {
          content: "";
          position: absolute;
          top: 6px;
          left: 50%;
          margin-left: -4px;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background-color: rgba(127, 127, 127, 0.25);
        }

        img {
          border-radius: 16px;
          max-width: 100%;
        }
      }
    }

    .info {
      margin-bottom: 3em;
      h1 {
        font-size: var(--fz-hero-sm);
        margin-bottom: 1em;
      }

      a {
        display: inline-block;
        background-color: var(--green);
        color: var(--white);
        border-radius: var(--border-radius-pill);
        font-weight: 700;
        font-size: var(--fz-lg);
        padding: var(--spacing-sm) var(--spacing-xl);

        &:hover,
        &:focus {
          text-decoration: none;
          filter: brightness(1.1);
        }
      }
      @media (min-width: 993px) {
        margin-left: 5em;
        margin-bottom: 0;
        width: 75%;

        h1 {
          font-size: var(--fz-hero-lg);
          margin-bottom: 0.5em;
        }
      }
    }
  }
`;

export default StyledHome;
