import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getArticles } from "../features/environment/environmentSlice";
import { EnvironmentArticle } from "./index";

const Environment = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((store) => store.environment);

  useEffect(() => {
    dispatch(getArticles());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="title-container">
        <h2>környezet</h2>
      </div>
      <div className="env-container">
        {articles.map((article, i) => {
          const { id } = article;
          const props = { article, i };

          return <EnvironmentArticle props={props} key={id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  background: var(--primary-clr-4);
  color: var(--primary-white);
  border-bottom: var(--border);

  .env-article {
    margin: 2rem 0;
    position: relative;
  }

  .desc,
  .env-mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .desc {
    z-index: 3;
    width: 100%;
    background: rgba(1, 1, 1, 0.3);
    padding: 1.5rem;
    border-radius: 25px;
    h3 {
      color: var(--primary-clr-3);
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.85rem;
      color: var(--primary-white);
    }
  }

  .env-mask {
    width: 100%;
    height: 100%;
    background: #222;
    opacity: 0.4;
    z-index: 2;
  }

  .img-container {
    width: 100%;
    height: 650px;
    margin: 2rem 0;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 250px) {
    .desc {
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 350px) {
    .desc {
      p {
        font-size: 1.15rem;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .desc {
      width: 80%;
    }
  }

  @media screen and (min-width: 820px) {
    .env-article {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      margin: 0 auto;
    }

    .desc {
      position: unset;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      width: 100%;
      height: min-content;
      background: whitesmoke;
      margin: 2rem 0;
      p {
        color: var(--primary-black);
      }
    }

    .odd-img {
      transform: translateX(2rem);
    }

    .odd-desc {
      transform: translateX(-2rem);
    }

    .even-img {
      transform: translateX(-2rem);
    }

    .even-desc {
      transform: translateX(2rem);
    }

    .img-container {
      border: inset 2px burlywood;
      border-radius: 25px;
      img {
        border-radius: 25px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .env-article {
      position: relative;
      margin: 2rem auto;
      max-width: 85vw;
    }

    .desc {
      padding: 3.5rem;
    }

    .odd-img {
      transform: translateX(7.5);
    }

    .odd-desc {
      transform: translateX(-7.5);
    }

    .even-img {
      transform: translateX(-7.5);
    }

    .even-desc {
      transform: translateX(7.5);
    }
  }

  @media screen and (min-width: 1800px) {
    .odd-img {
      transform: translateX(10rem);
    }

    .odd-desc {
      transform: translateX(-10rem);
    }

    .even-img {
      transform: translateX(-10rem);
    }

    .even-desc {
      transform: translateX(10rem);
    }
  }
`;

export default Environment;
