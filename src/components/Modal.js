import { useEffect } from "react";
import { BiChevronsLeft, BiChevronsRight, CgCloseR } from "../utils/icons";
import {
  changeCurrentItem,
  prevItem,
  nextItem,
} from "../features/gallery/gallerySlice";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isModalClose } from "../features/modal/modalSlice";

const Modal = () => {
  const { images, current_image, current_index } = useSelector(
    (store) => store.gallery
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="close-icon" onClick={() => dispatch(isModalClose())}>
        <CgCloseR />
      </div>
      <div className="container">
        <header>
          <BiChevronsLeft
            className="left"
            onClick={() => dispatch(prevItem())}
          />
          <img
            src={current_image.attributes.url}
            alt="main"
            className="current"
          />
          <BiChevronsRight
            className="right"
            onClick={() => dispatch(nextItem())}
          />
        </header>
        <footer>
          {images.map((img, i) => {
            const { id } = img;
            const { name, url } = img.attributes;

            return (
              <div key={id} onClick={() => dispatch(changeCurrentItem(i))}>
                <img
                  src={url}
                  alt={name}
                  className={current_index === i ? "active img" : "img"}
                />
              </div>
            );
          })}
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #222;
  user-select: none;
  position: fixed;
  top: 0;

  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
  }

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: var(--primary-clr-5);
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
  }

  .img {
    border: solid 2px transparent;
    filter: grayscale(100%);
  }

  .active {
    border: solid 2px darkgoldenrod;
    filter: grayscale(0%);
  }

  header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      color: #fc3;
      cursor: pointer;
      display: block;
      z-index: 1;
    }
    img {
      width: 100%;
      max-height: 700px;
      object-fit: scale-down;
    }
  }

  .left {
    left: 20px;
  }
  .right {
    right: 20px;
  }

  footer {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

export default Modal;
