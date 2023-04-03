import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApiConfig } from "config/pokemonApi";

const getPokemonsCall = () => pokemonApiConfig.get("/pokemon");

export const getPokemonsThunk = createAsyncThunk(
  "pokemonsList/getPokemons",
  async () => {
    const response = await getPokemonsCall();

    return response.data;
  }
);
