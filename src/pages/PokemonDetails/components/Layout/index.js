import PropTypes from "prop-types";

import Spinner from "components/Spinner";
import StatItem from "../StatItem";
import { STAT_CONFIG } from "pages/PokemonDetails/config/statsConfig";

import styles from "./styles.module.scss";

const Layout = ({ name, sprites, stats, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Pokemon Details</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.border}>
          <h3>{name}</h3>
          <img src={sprites?.front_default} alt="" />
          <div>
            {stats?.map(({ statName, statValue }) => (
              <StatItem
                key={statName}
                statValue={statValue}
                statName={statName}
                image={STAT_CONFIG[statName]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  name: PropTypes.string,
  sprites: PropTypes.objectOf(PropTypes.string),
  isLoading: PropTypes.bool,
};

export default Layout;
