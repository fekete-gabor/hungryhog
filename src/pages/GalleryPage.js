import { useEffect } from "react";
import { Gallery, Modal } from "../components/";
import { getGalleryImages } from "../features/gallery/gallerySlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";

const GalleryPage = () => {
  const { isModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGalleryImages());
    // eslint-disable-next-line
  }, []);

  return <Wrapper>{isModal ? <Modal /> : <Gallery />}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default GalleryPage;
