import { styled } from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 70px 0;

  .header {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__title {
      font-size: 30px;
    }

    &__text {
      font-size: 18px;
    }
  }
`;

export default HomePageStyled;
