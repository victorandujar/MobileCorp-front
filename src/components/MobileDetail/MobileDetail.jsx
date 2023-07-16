import MobileDetailStyled from "./MobileDetailStyled";

const MobileDetail = ({ mobile }) => {
  return (
    <MobileDetailStyled className="detail-mobile">
      <div className="detail-mobile__left-data">
        <div className="detail-mobile__header">
          <h2 className="detail-mobile__title">
            {mobile?.brand} {mobile?.model}
          </h2>
          <span className="detail-mobile__release">
            Released in {mobile?.announced}
          </span>
        </div>
        <img
          src={mobile?.imgUrl}
          alt={`${mobile?.brand} ${mobile?.model} mobile`}
          className="detail-mobile__media"
        />
      </div>
      <div className="detail-mobile__specifications specifications">
        <span className="specifications__title">Specifications</span>
        <ul className="specifications__list">
          <li className="specifications__data">
            <span className="specifications__reference">Dimentions:</span>
            {mobile?.dimentions}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">Weigth:</span>
            {mobile?.weight}g
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">OS:</span>
            {mobile?.os}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">CPU:</span>
            {mobile?.cpu}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">Internal memory:</span>
            {mobile?.internalMemory?.join(" / ")}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">External memory:</span>
            {mobile?.externalMemory}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">RAM:</span>
            {mobile?.ram}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">Main camera:</span>
            {mobile?.primaryCamera?.join(" + ")}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">Front camera:</span>
            {mobile?.secondaryCmera?.join(" + ")}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">
              Display Resolution:
            </span>
            {mobile?.displayResolution}
          </li>
          <li className="specifications__data">
            <span className="specifications__reference">Battery:</span>
            {mobile?.battery}
          </li>
        </ul>
      </div>
    </MobileDetailStyled>
  );
};

export default MobileDetail;
