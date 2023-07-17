import { styled } from "styled-components";

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0;

  .error-page {
    &__title {
      font-size: 24px;
      font-weight: bold;
    }

    &__code {
      font-size: 18px;
      font-weight: bold;
    }

    &__text {
      font-size: 16px;
    }

    &__go-back {
      font-size: 16px;
      background-color: ${(props) => props.theme.colors.secondaryColorButton};
      color: ${(props) => props.theme.colors.secondaryColorText};
      border-radius: 5px;
      width: 140px;
      height: 40px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default ErrorPageStyled;
