export const alfanumerico = (valor) => {
  if (!/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]*$/.test(valor)) {
    return false;
  }
  return true;
};

export const alfanumericoVarios = (valor) => {
  if (!/^[a-zA-Z0-9\s,áéíóúÁÉÍÓÚñÑ]*$/.test(valor)) {
    return false;
  } else if (/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]*$/.test(valor)) {
    return true;
  } else if (/,+[\s]*$/.test(valor)) {
    return false;
  } else if (/[,a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]*$/.test(valor)) {
    return true;
  }
  return false;
};