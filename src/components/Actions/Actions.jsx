import { useEffect, useState } from "react";
import ActionsStyled from "./ActionsStyled";

const Actions = ({ options, mobileId, mobilePrice }) => {
  const [selectedColorCode, setSelectedColorCode] = useState(0);
  const [selectedStorageCode, setSelectedStorageCode] = useState(0);

  const handleColorsClick = (event) => {
    event.preventDefault();

    setSelectedColorCode(+event.target.value);
  };

  const handleStorageClick = (event) => {
    event.preventDefault();

    setSelectedStorageCode(+event.target.value);
  };

  useEffect(() => {
    setSelectedColorCode(options?.colors[0]?.code);
    setSelectedStorageCode(options?.storages[0]?.code);
  }, [options]);

  return (
    <ActionsStyled className="actions">
      <div className="actions__options options">
        <h4 className="options__title">Colors</h4>
        <div className="options__choice">
          {options?.colors?.map(({ name, code }) => (
            <button
              key={name}
              onClick={handleColorsClick}
              value={code}
              className={
                code !== selectedColorCode
                  ? "options__option"
                  : "options__option--black"
              }
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="actions__options options">
        <h4 className="options__title">Storage</h4>
        <div className="options__choice">
          {options?.storages?.map(({ name, code }) => (
            <button
              key={name}
              onClick={handleStorageClick}
              value={code}
              className={
                code !== selectedStorageCode
                  ? "options__option"
                  : "options__option--black"
              }
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="actions__footer footer">
        {!mobilePrice ? (
          <span className="footer__price">Not available</span>
        ) : (
          <span className="footer__price">Price: {mobilePrice}€</span>
        )}
        <button className="footer__add" disabled={!mobilePrice}>
          Add to cart
        </button>
      </div>
    </ActionsStyled>
  );
};

export default Actions;
