import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    dados: null,
  },
  reducers: {
    login: (state, action) => {
      state.dados = action.payload;
    },
    logout: (state) => {
      state.dados = null;
    },
    atualizarPerfil: (state, action) => {
      state.dados = { ...state.dados, ...action.payload };
    },
  },
});

export const { login, logout, atualizarPerfil } = usuarioSlice.actions;

export default usuarioSlice.reducer;
