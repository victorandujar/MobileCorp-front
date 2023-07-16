import LoaderStyled from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderStyled className="loader">
      <svg
        className="ring"
        viewBox="25 25 50 50"
        strokeWidth="5"
        aria-label="The page is loading"
      >
        <circle cx="50" cy="50" r="20" />
      </svg>
    </LoaderStyled>
  );
};

export default Loader;
