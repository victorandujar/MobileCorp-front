import { Link } from "react-router-dom";
import BasicBreadcrumbs from "../BreadCrumbs/BreadCrumbs";
import HeaderStyled from "./HeaderStyled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import paths from "../../utils/paths/paths";

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={paths.home}>
        <h2>MobileCorp</h2>
      </Link>
      <BasicBreadcrumbs />
      <ShoppingCartIcon />
    </HeaderStyled>
  );
};

export default Header;
