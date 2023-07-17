import { Link } from "react-router-dom";
import paths from "../../utils/paths/paths";
import ErrorPageStyled from "./ErrorPageStyled";
import image from "../../images/borken-phone.png";

const ErrorPage = () => {
  return (
    <ErrorPageStyled className="error-page">
      <h3 className="error-page__title">Page not found</h3>
      <img src={image} alt="" width={80} height={80} />
      <span className="error-page__code">Error 404</span>
      <span className="error-page__text">
        Things are a little unstable here. I suggest to come back later.
      </span>
      <Link to={paths.home}>
        <button className="error-page__go-back">Go back home!</button>
      </Link>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
