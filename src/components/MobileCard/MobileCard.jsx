import * as React from "react";
import MobileCardStyled from "./MobileCardStyled";
import { Link } from "react-router-dom";

const MobileCard = ({ mobile }) => {
  return (
    <Link to={`/product/${mobile.id}`}>
      <MobileCardStyled className="mobile-card">
        <div className="mobile-card__image-container">
          <img
            className="mobile-card__image"
            alt={`${mobile.brand} ${mobile.model} mobile`}
            width={170}
            height={220}
            src={mobile.imgUrl}
          />
        </div>
        <div className="mobile-card__info info">
          <h2 className="info__mobile">
            {mobile.brand} {mobile.model}
          </h2>
          {!mobile.price ? (
            <span className="info__price">Not available</span>
          ) : (
            <span className="info__price">{mobile.price}€</span>
          )}
        </div>
      </MobileCardStyled>
    </Link>
  );
};

export default MobileCard;
