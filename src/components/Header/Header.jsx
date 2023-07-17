import { Link } from "react-router-dom";
import BasicBreadcrumbs from "../BreadCrumbs/BreadCrumbs";
import HeaderStyled from "./HeaderStyled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import paths from "../../utils/paths/paths";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import MobilesContext from "../../store/contexts/MobilesContext";

const Header = () => {
  const { mobiles } = useContext(MobilesContext);

  const localStorageValue = localStorage.getItem("count");

  return (
    <HeaderStyled className="header">
      <Link to={paths.home}>
        <h2 className="header__title">MobileCorp</h2>
      </Link>
      <div className="header__bread-crumbs">
        <BasicBreadcrumbs />
      </div>
      <Badge
        badgeContent={localStorageValue > 0 ? localStorageValue : mobiles.count}
        color="error"
      >
        <ShoppingCartIcon />
      </Badge>
    </HeaderStyled>
  );
};

export default Header;
