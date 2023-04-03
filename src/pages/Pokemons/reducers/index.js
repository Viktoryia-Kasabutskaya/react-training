import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsThunk } from "../api";

const initialState = {
  data: [],
  isLoading: false,
  errors: null,
};

const pokemonsSlice = createSlice({
  name: "pokemonsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.results;
    });
    builder.addCase(getPokemonsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});

export default pokemonsSlice.reducer;
