import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";

const BasicBreadcrumbs = () => {
  const { pathname } = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        Home
      </Link>
      {pathname.includes("/product") && (
        <Link underline="hover" color="inherit" to="/product/:productId">
          Product
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default BasicBreadcrumbs;
