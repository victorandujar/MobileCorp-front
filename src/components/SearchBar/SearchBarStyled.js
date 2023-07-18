import { styled } from "styled-components";

const SearchBarStyled = styled.form`
  display: flex;
  gap: 10px;

  .search-bar {
    &__field {
      height: 45px;
      width: 350px;
      border-radius: 8px;
      padding: 0 7px;
      border: 1px solid ${(props) => props.theme.colors.secondaryColorButton};

      @media (max-width: 597px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 597px) {
    width: 100%;
  }
`;
export default SearchBarStyled;
