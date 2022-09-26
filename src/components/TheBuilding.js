import { CustomSlider } from "../components";
import useMediaQuery from "../utils/mediaQuery";
import Paragraph from "../utils/Paragraph";
import restaurant_1 from "../assets/restaurant_1.jpg";
import restaurant_2 from "../assets/restaurant_2.jpg";
import styled from "styled-components";

const Building = () => {
  const mediaQuery = useMediaQuery("(min-width: 1550px)");

  return (
    <Wrapper>
      {mediaQuery && (
        <CustomSlider
          title={"az épület"}
          backgroundColor={"#bfbab0"}
          underlineColor={"#d9483b"}
          fontColor={"#222"}
          shadowColor={"#d36938"}
        />
      )}
      <article className="container">
        <header>
          <h2>a főhadiszállás</h2>
          <Paragraph amount={2} className={"reveal"} />
          <div className={"reveal"}></div>
          <Paragraph amount={1} className={"reveal"} />
        </header>
        <div className="img-container">
          <img
            src={restaurant_1}
            alt="interior of the restaurant"
            className="about-us-img"
          />
          <img
            src={restaurant_2}
            alt="interior of the restaurant"
            className="about-us-img"
          />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: var(--border);
  height: fit-content;

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
    position: relative;

    h2 {
      padding: 0;
      color: var(--primary-clr-5);
    }

    p {
      padding: 1rem 0;
      color: var(--primary-black);
      font-size: 1.05rem;
    }
    div {
      width: 65%;
      height: 2px;
      background: var(--primary-clr-5);
    }
  }

  .img-container {
    width: fit-content;
    position: relative;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 500px) {
    .img-container {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      padding: 5rem;
      text-align: right;
    }

    header {
      align-items: flex-end;
      margin: 0;
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: 1550px) {
    border-top: none;
  }
`;

export default Building;
