import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const handleClick = (event) => {
  event.preventDefault();
};

const BasicBreadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/product">
          Product
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
