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

  return (
    <HeaderStyled>
      <Link to={paths.home}>
        <h2>MobileCorp</h2>
      </Link>
      <BasicBreadcrumbs />
      <Badge badgeContent={mobiles.count} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </HeaderStyled>
  );
};

export default Header;
