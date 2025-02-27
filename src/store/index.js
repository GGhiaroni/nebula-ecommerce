import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./reducers/carrinho";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import usuarioSlice from "./reducers/usuario";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    usuario: usuarioSlice,
  },
});

export default store;
