import { createSelector } from "@reduxjs/toolkit";

const PokemonsSelector = (state) => state.pokemonsList;

export const PokemonsListSelector = createSelector(
  PokemonsSelector,
  (pokemonsList) => pokemonsList.data
);
