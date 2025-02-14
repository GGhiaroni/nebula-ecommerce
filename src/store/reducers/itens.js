import { createSlice } from "@reduxjs/toolkit";

const itensSlice = createSlice({
  name: "itens",
  initialState: [],
  reducers: {
    mudarFavorito: (state, params) => {
      console.log("state: ", state);
      console.log("params: ", params);
    },
  },
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;
