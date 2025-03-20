export const formatarCep = (cep) => {
  const cepNumerico = cep.replace(/\D/g, "");
  const cepTruncado = cepNumerico.slice(0, 8);

  if (cepTruncado.length > 5) {
    return `${cepTruncado.slice(0, 5)}-${cepTruncado.slice(5)}`;
  }

  return cepTruncado;
};
