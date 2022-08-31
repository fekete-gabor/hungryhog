import { useState, useEffect } from "react";
import styled from "styled-components";

const CreatedBy = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const date = new Date().getFullYear();
    setDate(date);
  }, []);

  return (
    <Wrapper>
      <h5>
        designed &amp; built by <span>&#10084; </span>fekete gábor, {date}
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color: var(--primary-clr-3);

  h5 {
    color: var(--primary-black);
  }

  span {
    color: var(--primary-clr-5);
  }
`;

export default CreatedBy;
