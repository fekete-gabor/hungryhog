import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const Menu = () => {
  const { menuItems } = useSelector((store) => store.menu);

  return (
    <Wrapper>
      {menuItems.map((item) => {
        const { id } = item;
        const { type } = item.attributes;
        const img = item.attributes.img.data.attributes.url;

        return (
          <div key={id}>
            <header>
              <img src={img} alt={type} />
            </header>
            <article>
              <h3>{type}</h3>
            </article>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  div {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  article {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: whitesmoke;
  }
`;

export default Menu;
