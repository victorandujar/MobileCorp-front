import { styled } from "styled-components";

const MobileCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 250px;
  height: 370px;
  background-color: ${(props) => props.theme.backgroundColors.CardBackGround};
  border-radius: 10px;
  padding: 30px 0;

  .mobile-card {
    &__image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(238, 234, 234, 0.808);
      padding-bottom: 15px;
      background-color: ${(props) =>
        props.theme.backgroundColors.mainBackGround};
      border: 1px solid rgba(149, 149, 149, 0.808);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.secondaryColorText};

    &__price {
      font-size: 15px;
    }
  }
`;

export default MobileCardStyled;
