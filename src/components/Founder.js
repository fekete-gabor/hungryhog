import { CustomSlider } from "./index";
import useMediaQuery from "../utils/mediaQuery";
import Paragraph from "../utils/Paragraph";
import founder from "../assets/founder.jpg";
import styled from "styled-components";

const Founder = () => {
  const mediaQuery = useMediaQuery("(min-width: 1550px)");

  return (
    <Wrapper>
      {mediaQuery && (
        <CustomSlider
          title={"éttermünk alapítója"}
          backgroundColor={"#2b2724"}
          underlineColor={"#f2f2f0"}
          fontColor={"#f2a007"}
          shadowColor={"#13498F"}
        />
      )}
      <article className="container">
        <header>
          {mediaQuery ? (
            <h2>aki elhozta nekünk az ízeket</h2>
          ) : (
            <h2>alapítónk, aki elhozta nekünk az ízeket</h2>
          )}
          <Paragraph amount={2} className={"reveal"} />
          <div className={"reveal"}></div>
          <Paragraph amount={1} className={"reveal"} />
        </header>
        <div className="img-container">
          <img src={founder} alt="founder of the restaurant" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            dolorem quis quia asperiores corporis amet rem, nulla vitae cumque
            natus labore provident est aliquid esse.
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: var(--border);
  background: var(--primary-clr-4);
  height: fit-content;
  padding-bottom: 3rem;

  .container {
    display: grid;
    text-align: center;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding: 0 1rem;

    h2 {
      padding: 0;
      color: var(--primary-clr-3);
    }

    p {
      padding: 1rem 0;
      color: var(--primary-white);
      font-size: 1.05rem;
    }
    div {
      margin: 0 auto;
      width: 65%;
      height: 2px;
      background: var(--primary-clr-3);
    }
  }

  .img-container {
    width: fit-content;
    max-height: 700px;
    position: relative;
    margin: 0 0 5rem 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      width: 100%;
      color: var(--primary-white);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (min-width: 500px) {
    .img-container {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 992px) {
    padding-bottom: 5rem;
    .container {
      display: grid;
      text-align: right;
      grid-template-columns: 65% 35%;
      padding: 5rem;
    }

    header {
      margin: 0;
      align-items: flex-end;
      p {
        font-size: 1.25rem;
      }
      div {
        margin: 0;
      }
    }

    .img-container {
      margin: 0 auto;
      p {
        text-align: left;
      }
    }
  }

  @media screen and (min-width: 1550px) {
    border-top: none;
  }
`;

export default Founder;
