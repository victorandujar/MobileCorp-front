import { styled } from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 70px 220px;

  @media (max-width: 1630px) {
    padding: 70px 120px;
  }

  @media (max-width: 1417px) {
    padding: 70px 0px;
  }

  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &__title {
      font-size: 30px;
    }

    &__text {
      font-size: 18px;
    }

    &__welcome {
      @media (max-width: 1150px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    }

    @media (max-width: 1150px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default HomePageStyled;
