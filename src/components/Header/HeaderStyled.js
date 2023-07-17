import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 245px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColors.mainBackGround};

  @media (max-width: 1630px) {
    padding: 10px 150px;
  }

  @media (max-width: 1414px) {
    padding: 10px 30px;
  }

  .header {
    &__title {
      @media (max-width: 440px) {
        font-size: 18px;
      }
    }

    &__bread-crumbs {
      @media (max-width: 440px) {
        display: none;
        padding: 30px 0;
      }
    }
  }
`;

export default HeaderStyled;
