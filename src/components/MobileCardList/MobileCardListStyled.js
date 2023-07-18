import { styled } from "styled-components";

const MobileCarListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-content: space-between;

  @media (max-width: 597px) {
    padding: 70px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    @media (max-width: 597px) {
      width: 100%;
    }
  }
`;

export default MobileCarListStyled;
