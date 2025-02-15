import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
});

export default carrinhoSlice.reducer;
