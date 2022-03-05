import styled from "styled-components";

export const MyAppStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100vw;
  height: 100vh;
  transition: all 0.2s;
  background: ${(props) => (props.theme === true ? "#0a1128" : "#edf5fc")};
  overflow-x: hidden;

  .perfil {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    img {
      max-width: 200px;
      max-height: 200px;
      width: 100%;
      height: 100%;
      padding: 0.4rem;
      border-radius: 50%;
      background: linear-gradient(
        var(--main-color),
        var(--note),
        var(--body-text-color)
      );
    }

    h1 {
      font-size: 1.2rem;
      margin: 1.5rem 0 3rem;
      color: ${(props) => (props.theme === true ? "#edf5fc" : "#0a1128")};
    }

    ul {
      width: min(400px, 90%);
      li {
        border: 2px solid var(--note);
        border-radius: 0.6rem;
        padding: 0.6rem;
        margin-bottom: 1rem;
        width: 100%;
        cursor: pointer;

        a {
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          color: ${(props) => (props.theme === true ? "#edf5fc" : "#0a1128")};
        }

        &:hover {
          background: var(--main-color);
          a {
            color: var(--body-bg-color);
            text-shadow: 1px 1px 3px var(--body-text-color);
          }
        }
      }
    }

    p {
      width: min(400px, 90%);
      margin: 0 auto;
      text-align: center;
      margin-top: 3rem;
      color: ${(props) => (props.theme === true ? "#edf5fc" : "#0a1128")};
    }
  }

  .toggleButton {
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right: 20px;

    button {
      background: none;
      border: none;
      color: ${(props) => (props.theme === true ? "#edf5fc" : "#0a1128")};
      &:hover {
        color: var(--main-color);
      }
    }
  }
`;
