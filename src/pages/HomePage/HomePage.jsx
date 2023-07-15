import { useQuery } from "react-query";
import MobileCardList from "../../components/MobileCardList/MobileCardList";
import useApi from "../../hooks/useApi/useApi";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const { getMobilesData } = useApi();

  const { data } = useQuery("mobiles", getMobilesData);

  return (
    <HomePageStyled className="home-page">
      <div className="home-page__header header">
        <h2 className="header__title">Welcome to MobileCorp</h2>
        <h2 className="header__text">
          Select and buy your new mobile phone with just one click!
        </h2>
      </div>
      <MobileCardList mobiles={data} />
    </HomePageStyled>
  );
};

export default HomePage;
