export const valPassword = (value) => {
  if (value.length < 6 || value.length > 20) {
    return false;
  } else {
    return true;
  }
};

