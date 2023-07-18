import { styled } from "styled-components";

const MobileDetailStyled = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;

  @media (max-width: 905px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detail-mobile {
    &__left-data {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__title {
      font-size: 30px;
      @media (max-width: 400px) {
        font-size: 20px;
      }
    }

    &__release {
      @media (max-width: 400px) {
        font-size: 12px;
      }
    }

    &__media {
      @media (max-width: 905px) {
        width: 200px;
        height: 250px;
      }
    }
  }

  .specifications {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 5px;

    &__title {
      font-weight: bold;
    }

    &__reference {
      font-weight: bold;
      @media (max-width: 550px) {
        font-size: 14px;
      }

      @media (max-width: 400px) {
        font-size: 12px;
      }
    }

    &__data {
      display: flex;
      gap: 7px;
      font-size: 15px;

      @media (max-width: 550px) {
        font-size: 12px;
      }

      @media (max-width: 400px) {
        font-size: 11px;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export default MobileDetailStyled;
