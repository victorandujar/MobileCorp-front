import { Link, useParams } from "react-router-dom";
import MobileDetail from "../../components/MobileDetail/MobileDetail";
import useApi from "../../hooks/useApi/useApi";
import { useQuery } from "react-query";
import DetailPageStyled from "./DetailPageStyled";
import Loader from "../../components/Loader/Loader";
import paths from "../../utils/paths/paths";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const DetailPage = () => {
  const { getMobileData } = useApi();
  const { productId } = useParams();

  const { data, isLoading, isError } = useQuery(
    "mobile",
    () => getMobileData(productId),
    {
      enabled: Boolean(productId),
      cacheTime: 60 * 60 * 1000,
    },
  );

  if (isError) {
    return (
      <DetailPageStyled>
        <span>Oooops. Something went wrong. Please try again later!</span>
      </DetailPageStyled>
    );
  }

  return (
    <DetailPageStyled className="detail-page">
      <Link to={paths.home}>
        <ArrowBackIosIcon />
      </Link>
      {isLoading ? <Loader /> : <MobileDetail mobile={data} />}
    </DetailPageStyled>
  );
};

export default DetailPage;
