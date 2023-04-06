import { createSlice } from "@reduxjs/toolkit";

import { getPokemonDetailsThunk } from "../api";
import { createStatsList } from "../utils/createStatsList";

const initialState = {
  isLoading: false,
  errors: null,
  name: "",
  stats: [],
  sprites: {},
};

const PokemonDetailsSlice = createSlice({
  name: "PokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetailsThunk.fulfilled, (state, { payload }) => {
      const { name, stats, sprites } = payload;
      state.isLoading = false;
      state.name = name;
      state.stats = createStatsList(stats);
      state.sprites = sprites;
    });
    builder.addCase(getPokemonDetailsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});
export default PokemonDetailsSlice.reducer;
