import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    usuarioAtual: JSON.parse(localStorage.getItem("usuarioLogado")) || null,
  },
  reducers: {
    login: (state, action) => {
      state.usuarioAtual = action.payload;
      localStorage.setItem("usuarioLogado", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.usuarioAtual = null;
      localStorage.removeItem("usuarioLogado");
    },
  },
});

export const { login, logout, atualizarPerfil } = usuarioSlice.actions;

export default usuarioSlice.reducer;
