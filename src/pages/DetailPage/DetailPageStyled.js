import { styled } from "styled-components";

const DetailPageStyled = styled.div`
  padding: 70px 220px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1533px) {
    padding: 70px 130px;
  }

  @media (max-width: 1414px) {
    padding: 70px 10px;
  }
`;
export default DetailPageStyled;
