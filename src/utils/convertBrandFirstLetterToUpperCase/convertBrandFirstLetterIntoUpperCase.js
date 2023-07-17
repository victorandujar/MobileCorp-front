const convertBrandFirstLetterIntoUpperCase = (brand) => {
  if (!brand) {
    return "";
  } else {
    const firstLetterToUpperCase = brand.charAt(0).toUpperCase();
    const restStringToLowerCase = brand.slice(1).toLowerCase();
    return firstLetterToUpperCase + restStringToLowerCase;
  }
};

export default convertBrandFirstLetterIntoUpperCase;
