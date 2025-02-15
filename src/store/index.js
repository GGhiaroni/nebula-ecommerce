import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./reducers/carrinho";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
  },
});

export default store;
