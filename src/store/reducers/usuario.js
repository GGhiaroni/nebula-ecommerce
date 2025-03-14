import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    usuarioAtual: JSON.parse(localStorage.getItem("usuarioLogado")) || null,
  },
  reducers: {
    login: (state, action) => {
      state.dados = action.payload;
    },
    logout: (state) => {
      state.dados = null;
    },
    atualizarPerfil: (state, action) => {
      state.lista = state.lista.map((user) => {
        user.id === action.payload.id ? action.payload : user;
      });

      state.dados = action.payload;
      localStorage.setItem("usuarios", JSON.stringify(state.lista));
      localStorage.setItem("usuario", JSON.stringify(state.dados));
    },
  },
});

export const { login, logout, atualizarPerfil } = usuarioSlice.actions;

export default usuarioSlice.reducer;
