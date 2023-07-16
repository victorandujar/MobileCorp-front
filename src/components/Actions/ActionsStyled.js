import { styled } from "styled-components";

const ActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__title {
      font-weight: 900;
    }

    &__option {
      border: 1px solid ${(props) => props.theme.colors.secondaryColorButton};
      border-radius: 5px;
      width: 100px;
      height: 25px;

      &--black {
        border: none;
        background-color: ${(props) => props.theme.colors.secondaryColorButton};
        color: ${(props) => props.theme.colors.secondaryColorText};
        border-radius: 5px;
        width: 100px;
        height: 25px;
      }
    }

    &__choice {
      display: flex;
      gap: 10px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    &__price {
      font-size: 20px;
    }

    &__add {
      border: none;
      background-color: ${(props) => props.theme.colors.secondaryColorButton};
      color: ${(props) => props.theme.colors.secondaryColorText};
      border-radius: 5px;
      width: 100px;
      height: 25px;

      &:disabled {
        border: 1px solid ${(props) => props.theme.colors.secondaryColorButton};
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.mainColorButton};
        color: ${(props) => props.theme.colors.mainColorText};
      }
    }
  }
`;

export default ActionsStyled;
