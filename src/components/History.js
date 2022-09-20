import Paragraph from "../utils/Paragraph";
import styled from "styled-components";

const History = () => {
  return (
    <Wrapper>
      <article>
        <header>
          <h2>történetünk</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </header>
        <div className="desc-container">
          <Paragraph amount={1} />
          <div></div>
          <Paragraph amount={2} />
          <div></div>
          <Paragraph amount={1} />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: var(--primary-clr-4);

  article {
    display: grid;
  }

  header {
    margin-top: 2rem;
    text-align: center;
  }

  h2 {
    color: var(--primary-clr-3);
  }

  p {
    color: var(--primary-white);
  }

  .desc-container {
    padding: 0 1rem;
    font-size: 1.05rem;
    text-align: center;
    div {
      margin: 0 auto;
      width: 65%;
      height: 2px;
      background: var(--primary-clr-3);
    }
    p {
      margin: 2rem 0;
    }
  }

  @media screen and (min-width: 400px) {
    .desc-container {
      padding: 0 3rem;
    }
  }

  @media screen and (min-width: 992px) {
    article {
      grid-template-columns: 35% 65%;
      padding: 5rem;
    }

    header {
      margin: 2rem 2rem 0 0;
      text-align: right;
    }

    .desc-container {
      text-align: left;
      font-size: 1.25rem;
      div {
        margin: 0;
      }
    }
  }
`;

export default History;
