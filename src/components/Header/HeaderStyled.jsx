import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 2;
  width: 100%;
  background-color: #f5f5f5;
`;

export default HeaderStyled;