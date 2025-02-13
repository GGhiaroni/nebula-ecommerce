import { createSlice } from "@reduxjs/toolkit";
import eletronicosHeader from "/public/eletronicos-header.jpg";
import eletronicosThumb from "/public/eletronicos-thumb.jpg";
import joiasHeader from "/public/joias-header.jpg";
import joiasThumb from "/public/joias-thumb.webp";
import roupasFemininasHeader from "/public/roupas-femininas-header.jpg";
import roupasFemininasThumb from "/public/roupas-femininas-thumb.jpg";
import roupasMasculinasHeader from "/public/roupas-masculinas-header.jpg";
import roupasMasculinasThumb from "/public/roupas-masculinas-thumb.webp";

const estadoInicial = [
  {
    nome: "Roupas Masculinas",
    id: 1,
    descricao: "Estilo e conforto para o dia a dia do homem moderno.",
    tagNaFakeStoreApi: "men's%20clothing",
    thumbnail: roupasMasculinasThumb,
    header: roupasMasculinasHeader,
  },
  {
    nome: "Roupas Femininas",
    id: 2,
    descricao: "Moda versátil e elegante para todas as ocasiões.",
    tagNaFakeStoreApi: "women's%20clothing",
    thumbnail: roupasFemininasThumb,
    header: roupasFemininasHeader,
  },
  {
    nome: "Jóias",
    id: 3,
    descricao: "Beleza e sofisticação em acessórios exclusivos.",
    tagNaFakeStoreApi: "jewelery",
    thumbnail: joiasThumb,
    header: joiasHeader,
  },
  {
    nome: "Eletrônicos",
    id: 4,
    descricao: "Tecnologia e inovação para facilitar seu dia a dia.",
    tagNaFakeStoreApi: "electronics",
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
  },
];

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: estadoInicial,
});

export default categoriasSlice.reducer;
