import styled from "styled-components";
import { BiUpArrowAlt } from "../utils/icons";
import { useSelector } from "react-redux";

const ScrollTop = () => {
  const { isModal } = useSelector((store) => store.modal);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      {isModal || (
        <button onClick={() => scrollTop()}>
          <BiUpArrowAlt />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  button {
    cursor: pointer;
    position: fixed;
    bottom: 15px;
    right: 15px;
    color: var(--primary-clr-5);
    background: none;
    border: none;
    font-size: 2.5rem;
    transition: var(--transition);
    transform: scale(1);
    z-index: 997;
    &:hover {
      transform: scale(1.3);
      color: var(--primary-clr-3);
    }
  }
`;

export default ScrollTop;
