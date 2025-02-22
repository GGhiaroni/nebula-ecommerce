import { createSlice } from "@reduxjs/toolkit";

const itensSlice = createSlice({
  name: "itens",
  initialState: {
    lista: [],
    favoritos: [],
  },
  reducers: {
    addItem: (state, action) => {
      const novoItem = action.payload;
      state.lista.push({
        ...novoItem,
        favorito: state.favoritos.includes(novoItem.id),
      });
    },
    setItens: (state, action) => {
      // Adiciona os novos produtos sem sobrescrever os já existentes
      const novosProdutos = action.payload.filter(
        (novoProduto) =>
          !state.lista.some((produto) => produto.id === novoProduto.id)
      );
      state.lista = [...state.lista, ...novosProdutos];
    },
    mudarFavorito: (state, action) => {
      const id = action.payload;
      if (state.favoritos.includes(id)) {
        state.favoritos = state.favoritos.filter((favId) => favId !== id);
      } else {
        state.favoritos.push(id);
      }

      state.lista = state.lista.map((item) =>
        item.id === id ? { ...item, favorito: !item.favorito } : item
      );
    },
  },
});

export const { mudarFavorito, setItens, addItem } = itensSlice.actions;

export default itensSlice.reducer;
