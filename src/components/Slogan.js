import styled from "styled-components";

const Slogan = () => {
  return (
    <Wrapper>
      <h2>friss finom igazi</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, #fc3, orangered, var(--primary-clr-5));
  border-bottom: var(--border);

  h2 {
    line-height: 50px;
    color: var(--primary-black);
    padding: 3rem 2rem;
    letter-spacing: 20px;
    font-family: var(--ff-secondary);
    font-weight: 550;
  }
`;

export default Slogan;
