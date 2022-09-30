import { Gallery, Modal } from "../components/";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";

const GalleryPage = () => {
  const { isModal } = useSelector((store) => store.modal);

  return <Wrapper>{isModal ? <Modal /> : <Gallery />}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default GalleryPage;
