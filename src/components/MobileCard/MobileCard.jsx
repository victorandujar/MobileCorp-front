import * as React from "react";
import MobileCardStyled from "./MobileCardStyled";

const MobileCard = ({ mobile }) => {
  return (
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
          {mobile.brand} - {mobile.model}
        </h2>
        <span>{mobile.price}€</span>
      </div>
    </MobileCardStyled>
  );
};

export default MobileCard;
