import MobileCard from "../MobileCard/MobileCard";
import MobileCarListStyled from "./MobileCardListStyled";

const MobileCardList = ({ mobiles }) => {
  return (
    <MobileCarListStyled>
      {mobiles?.map((mobile) => (
        <li key={mobile.id}>
          <MobileCard mobile={mobile} />
        </li>
      ))}
    </MobileCarListStyled>
  );
};

export default MobileCardList;
