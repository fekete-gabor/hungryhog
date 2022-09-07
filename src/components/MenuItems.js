import styled from "styled-components";
import { MenuItemsList } from "./index";
import { getUniqueValues } from "../utils/helpers";
import { useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MenuItems = () => {
  const { filteredMenuItems } = useSelector((store) => store.menu);
  const titles = getUniqueValues(filteredMenuItems, "type");

  return (
    <Wrapper>
      <div>
        {titles.map((title, i) => {
          return (
            <div key={i}>
              <h1>{title}</h1>
              <MenuItemsList
                title={title}
                filteredMenuItems={filteredMenuItems}
                key={i}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;

export default MenuItems;
