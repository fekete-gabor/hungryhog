import styled from "styled-components";
import { BiUpArrowAlt } from "../utils/icons";

const ScrollTop = () => {
  return (
    <Wrapper>
      <a href="#">
        <BiUpArrowAlt />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  a {
    cursor: pointer;
    position: fixed;
    bottom: 15px;
    right: 15px;
    color: var(--primary-clr-3);
    font-size: 2.5rem;
    transition: var(--transition);
    transform: scale(1);
    &:hover {
      transform: scale(1.3);
      color: var(--primary-clr-5);
    }
  }
`;

export default ScrollTop;
