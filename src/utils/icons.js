import {
  AiOutlineBars,
  AiOutlineUnorderedList,
  AiOutlineClose,
} from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const icons = [
  {
    id: 1,
    url: "http://www.facebook.com",
    icon: <FaFacebookSquare />,
  },
  { id: 2, url: "http://www.instagram.com", icon: <FaInstagramSquare /> },
  { id: 3, url: "http://www.twitter.com", icon: <FaTwitterSquare /> },
];

export const mediaIcons = icons.map((item) => {
  const { id, url, icon } = item;

  return (
    <a href={url} target="_blank" rel="noreferrer" key={id}>
      {icon}
    </a>
  );
});

export {
  AiOutlineBars,
  AiOutlineUnorderedList,
  AiOutlineClose,
  CgCloseR,
  BiUpArrowAlt,
  BsGridFill,
};
