import { useEffect } from "react";
import styled from "styled-components";
import { isModalOpen } from "../features/modal/modalSlice";
import { changeCurrentItem } from "../features/gallery/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";

const Gallery = () => {
  const { images } = useSelector((store) => store.gallery);
  const dispatch = useDispatch();

  const handleChange = (i) => {
    dispatch(isModalOpen());
    dispatch(changeCurrentItem(i));
  };

  useEffect(() => {
    gsap.utils.toArray(".gallery-img").forEach((img) => {
      img.addEventListener("mouseover", (e) => {
        gsap.to(".gallery-img", {
          filter: "grayscale(100%)",
        });
        gsap.to(e.target, { filter: "grayscale(0%)" });
      });
    });
  }, [images]);

  useEffect(() => {
    const container = document.querySelector(".gallery-img-container");

    container.addEventListener("mouseleave", () => {
      gsap.fromTo(
        ".gallery-img",
        { filter: "grayscale(100%)" },
        { filter: "grayscale(0%)" }
      );
    });
  }, []);

  return (
    <Wrapper className="gallery-img-container">
      {images.map((img, i) => {
        const { id } = img;
        const { name, url } = img.attributes;

        return (
          <div key={id} onClick={() => handleChange(i)}>
            <img src={url} alt={name} className="gallery-img" />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 3rem auto;

  div {
    max-width: 350px;
    max-height: 300px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 400px) {
    max-width: 75vw;
  }
`;

export default Gallery;
