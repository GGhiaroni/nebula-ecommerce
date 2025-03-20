const buscarCep = async (cep, setEstadoCep, setBuscandoCep) => {
  if (!cep) {
    setEstadoCep({ rua: "", bairro: "", cidade: "", estado: "", cep: "" });
    return;
  }

  setBuscandoCep(true);

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      toast.error("CEP não encontrado! ⚠️");
      setEstadoCep({ rua: "", bairro: "", cidade: "", estado: "", cep: "" });
      return;
    }

    setEstadoCep({
      rua: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
      cep: data.cep,
    });
  } catch (error) {
    toast.error("Erro ao buscar o endereço! ⚠️");
    setEstadoCep({ rua: "", bairro: "", cidade: "", estado: "", cep: "" });
    setBuscandoCep(false);
  }
  setBuscandoCep(false);
};
