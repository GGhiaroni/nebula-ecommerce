import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [];

const itensSlice = createSlice({
  name: "itens",
  initialState: estadoInicial,
});

export default itensSlice.reducer;
