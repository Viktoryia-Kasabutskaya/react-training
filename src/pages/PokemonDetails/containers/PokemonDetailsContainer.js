import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonDetailsThunk } from "../api";
import {
  isPokemonDetailsLoadingSelector,
  pokemonDetailsSelector,
} from "../selectors";

import Layout from "../components/Layout";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();

  const { name, sprites, stats } = useSelector(pokemonDetailsSelector);
  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <Layout name={name} sprites={sprites} stats={stats} isLoading={isLoading} />
  );
};

export default PokemonDetailsContainer;
