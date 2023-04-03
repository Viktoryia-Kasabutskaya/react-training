import { useDispatch, useSelector } from "react-redux";

import { getPokemonsThunk } from "../api";
import { PokemonsListSelector } from "../selectors";
import Layout from "../components/Layout";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(PokemonsListSelector);

  const handlePokemonsLoad = () => {
    dispatch(getPokemonsThunk());
  };

  return <Layout pokemons={pokemons} handlePokemonsLoad={handlePokemonsLoad} />;
};

export default PokemonsContainer;
