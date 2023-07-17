import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 250px;
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
`;

export default HeaderStyled;
