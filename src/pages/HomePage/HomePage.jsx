import { useQuery } from "react-query";
import MobileCardList from "../../components/MobileCardList/MobileCardList";
import useApi from "../../hooks/useApi/useApi";
import HomePageStyled from "./HomePageStyled";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const HomePage = () => {
  const { getMobilesData } = useApi();

  const [searchedMobile, setSearchedMobile] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  const { data, isLoading, isError, isFetching } = useQuery(
    "mobiles",
    getMobilesData,
    {
      cacheTime: 60 * 60 * 1000,
      staleTime: 60 * 60 * 1000,
    },
  );

  const handleMobileSearch = ({ target: { value } }) => {
    setSearchedMobile(value);

    const mobilesFiltered = [];

    data.forEach((mobile) => {
      const mobileFullName = `${mobile.brand} ${mobile.model}`;
      if (mobileFullName.toLowerCase().includes(value.toLowerCase())) {
        mobilesFiltered.push(mobile);
      }

      setFilteredMobiles(mobilesFiltered);
    });
  };

  if (isError) {
    return (
      <HomePageStyled>
        <span>Oooops. Something went wrong. Please try again later!</span>
      </HomePageStyled>
    );
  }

  return (
    <HomePageStyled className="home-page">
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <>
          <div className="home-page__header header" hidden={isLoading}>
            <div className="header__welcome">
              <h2 className="header__title">Welcome to MobileCorp</h2>
              <h2 className="header__text">
                Select and buy your new mobile phone with just one click!
              </h2>
            </div>
            <SearchBar
              handleMobileSearchInput={handleMobileSearch}
              searchMobile={searchedMobile}
              disabled={isLoading}
            />
          </div>
          {filteredMobiles.length > 0 ? (
            <MobileCardList mobiles={filteredMobiles} />
          ) : (
            <MobileCardList mobiles={data} />
          )}
        </>
      )}
    </HomePageStyled>
  );
};

export default HomePage;
