export const validateEmail = email => {
  const emailRegex =
    /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
};
export const validateDomain = domain => {
  const regWeb =
    /^((https?|ftp|smtp):\/\/)?(www.)?[A-Za-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
  return regWeb.test(domain);
};
export const validatePassword = password => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};
export const validatePhone = number => {
  const numberRegex = /^[0-9]*$/;
  return numberRegex.test(number);
};
export const priceValidation = value => {
  const regex = /^(\d*\.{0,1}\d{0,2}$)/;
  return regex.test(value);
};
