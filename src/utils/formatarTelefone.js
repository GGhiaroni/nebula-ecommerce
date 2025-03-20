export const formatarTelefone = (telefone) => {
  const telefoneNumerico = telefone.replace(/\D/g, "");
  const telefoneTruncado = telefoneNumerico.slice(0, 11);

  if (telefoneTruncado.length === 11) {
    return `(${telefoneTruncado.slice(0, 2)}) ${telefoneTruncado.slice(
      2,
      7
    )}-${telefoneTruncado.slice(7)}`;
  }

  return telefoneTruncado;
};
