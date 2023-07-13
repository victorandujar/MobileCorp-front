import BasicBreadcrumbs from "../BreadCrumbs/BreadCrumbs";
import HeaderStyled from "./HeaderStyled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <HeaderStyled>
      <h2>MobileCorp</h2>
      <BasicBreadcrumbs />
      <ShoppingCartIcon />
    </HeaderStyled>
  );
};

export default Header;
