import { createSlice } from "@reduxjs/toolkit";

const itensSlice = createSlice({
  name: "itens",
  initialState: [],
  reducers: {
    setItens: (state, action) => {
      return action.payload;
    },
    mudarFavorito: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, favorito: !item.favorito }
          : item
      );
    },
  },
});

export const { mudarFavorito, setItens } = itensSlice.actions;

export default itensSlice.reducer;
