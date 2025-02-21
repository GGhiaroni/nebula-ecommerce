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
      state.lista = action.payload.map((produto) => ({
        ...produto,
        favorito: state.favoritos.includes(produto.id),
      }));
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
