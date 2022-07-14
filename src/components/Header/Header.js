import { Link } from "react-router-dom";
import { HeaderStyle, LinkSite } from "./styles";

export const Header = () => {
  return (
    <HeaderStyle>
      <LinkSite>My Site</LinkSite>
      <Link>Movies</Link>
      <Link>TV Showes</Link>
      <Link>People</Link>
      <Link>More</Link>
    </HeaderStyle>
  );
};
