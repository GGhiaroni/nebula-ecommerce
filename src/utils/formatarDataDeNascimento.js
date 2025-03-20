export const formatarDataNascimento = (data) => {
  if (!data) return "";

  const partes = data.split("-");

  if (partes.length !== 3) return data;

  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};
