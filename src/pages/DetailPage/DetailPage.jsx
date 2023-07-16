import { useParams } from "react-router-dom";
import MobileDetail from "../../components/MobileDetail/MobileDetail";
import useApi from "../../hooks/useApi/useApi";
import { useQuery } from "react-query";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  const { getMobileData } = useApi();
  const { productId } = useParams();

  const { data } = useQuery("mobile", () => getMobileData(productId), {
    enabled: Boolean(productId),
  });

  return (
    <DetailPageStyled>
      <MobileDetail mobile={data} />
    </DetailPageStyled>
  );
};

export default DetailPage;
