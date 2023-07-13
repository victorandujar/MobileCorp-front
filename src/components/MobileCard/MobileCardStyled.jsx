import { styled } from "styled-components";

const MobileCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  height: 340px;
  background-color: ${(props) =>
    props.theme.backgroundColors.tertiaryBackGround};
  border-radius: 10px;

  .mobile-card {
    &__image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 15px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default MobileCardStyled;
