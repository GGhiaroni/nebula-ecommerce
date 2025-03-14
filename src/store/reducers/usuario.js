import { createSlice } from "@reduxjs/toolkit";

const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || null;

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    usuarioAtual: usuarioLogado,
    lista: usuariosSalvos,
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
    cadastrarUsuario: (state, action) => {
      state.lista.push(action.payload);
      localStorage.setItem("usuarios", JSON.stringify(state.lista));
    },
    atualizarUsuario: (state, action) => {
      const index = state.lista.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.lista[index] = action.payload;
        localStorage.setItem("usuarios", JSON.stringify(state.lista));
      }
    },
    deletarUsuario: (state, action) => {
      state.lista = state.lista.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("usuarios", JSON.stringify(state.lista));
    },
  },
});

export const { login, logout, atualizarPerfil } = usuarioSlice.actions;

export default usuarioSlice.reducer;
