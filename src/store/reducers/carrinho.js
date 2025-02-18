import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: estadoInicial,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.find((item) => item.id === payload.id);

      if (!temItem) {
        return [
          ...state,
          {
            ...payload,
            quantidade: 1,
          },
        ];
      }

      return state.map((item) =>
        item.id === payload.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    },
    removerItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    controlarQuantidade: (state, { payload }) => {
      return state.map((item) =>
        item.id === payload.id
          ? { ...item, quantidade: payload.quantidade }
          : item
      );
    },
  },
});

export const { mudarCarrinho, removerItem, controlarQuantidade } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
