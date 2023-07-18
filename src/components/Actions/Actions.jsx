import { useEffect, useState } from "react";
import ActionsStyled from "./ActionsStyled";
import useApi from "../../hooks/useApi/useApi";
import ToastSuccess from "../ToastSuccess/ToastSuccess";

const Actions = ({ options, mobilePrice, productId }) => {
  const { addMobileToCart } = useApi();

  const [selectedColorCode, setSelectedColorCode] = useState(0);
  const [selectedStorageCode, setSelectedStorageCode] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

  const handleAddMobileToCart = async () => {
    const mobile = await addMobileToCart({
      id: productId,
      colorCode: selectedColorCode,
      storageCode: selectedStorageCode,
    });

    if (mobile) {
      setOpen(true);
    }

    const localStorgeValue = localStorage.getItem("count");

    localStorage.setItem("count", +localStorgeValue + +mobile?.count);
  };

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
          <span className="footer__price">{mobilePrice}€</span>
        )}
        <button
          className="footer__add"
          disabled={!mobilePrice}
          onClick={handleAddMobileToCart}
        >
          Add to cart
        </button>
      </div>
      {open && <ToastSuccess open={open} handleClose={handleClose} />}
    </ActionsStyled>
  );
};

export default Actions;
