export const formatarCpf = (cpf) => {
  const cpfNumerico = cpf.replace(/\D/g, "");
  const cpfTruncado = cpfNumerico.slice(0, 11);

  if (cpfTruncado.length === 11) {
    return `${cpfTruncado.slice(0, 3)}.${cpfTruncado.slice(
      3,
      6
    )}.${cpfTruncado.slice(6, 9)}-${cpfTruncado.slice(9)}`;
  }

  return cpfTruncado;
};
