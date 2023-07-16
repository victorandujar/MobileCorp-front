import { styled } from "styled-components";

const MobileDetailStyled = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;

  .detail-mobile {
    &__left-data {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__title {
      font-size: 30px;
    }

    &__release {
      font-size: 14px;
    }
  }

  .specifications {
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding-top: 5px;

    &__title {
      font-weight: bold;
    }

    &__reference {
      font-weight: bold;
    }

    &__data {
      display: flex;
      gap: 7px;
      font-size: 15px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export default MobileDetailStyled;
