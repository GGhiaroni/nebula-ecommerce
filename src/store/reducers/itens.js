import { createSlice } from "@reduxjs/toolkit";

const itensSlice = createSlice({
  name: "itens",
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map((item) =>
        item.id === payload ? { ...item, favorito: !item.favorito } : item
      );
    },
  },
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;
