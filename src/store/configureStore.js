import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "pages/TodoList/reducers";
import pokemonsReducer from "pages/Pokemons/reducers";
import pokemonDetailsReducer from "pages/PokemonDetails/reducers";

export const store = configureStore({
  reducer: {
    todoList: todosReducer,
    pokemonsList: pokemonsReducer,
    pokemonDetails: pokemonDetailsReducer,
  },
});
