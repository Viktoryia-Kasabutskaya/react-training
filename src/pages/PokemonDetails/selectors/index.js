import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonDetails;

export const pokemonDetailsSelector = createSelector(
  baseSelector,
  (details) => details.data
);

export const isPokemonDetailsLoadingSelector = createSelector(
  baseSelector,
  (details) => details.isLoading
);
