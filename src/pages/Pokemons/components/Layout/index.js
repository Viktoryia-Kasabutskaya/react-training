import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import CustomButton from "components/CustomButton";

import styles from "./styles.module.scss";

const Layout = ({ pokemons, handlePokemonsLoad }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h2>Pokemons</h2>
        <CustomButton text="Get All Pokemons" onClick={handlePokemonsLoad} />
      </div>
      <div className={styles.items}>
        {pokemons.map(({ name }) => (
          <Link key={name} to={`${ROUTE_NAMES.POKEMONS}/${name}`}>
            <CustomButton text={name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

Layout.propTypes = {
  handlePokemonsLoad: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Layout;
