import PropTypes from "prop-types";

import Spinner from "components/Spinner";

import styles from "./styles.module.scss";

// import hp from "static/image/life-bar.png";
// import attack from "static/image/sword.png";
// import defense from "static/image/shield.png";
// import specialAttack from "static/image/hammer.png";
// import specialDefense from "static/image/defense.png";
// import speed from "static/image/wind.png";

// const STAT_IMAGES = {
//   hp,
//   attack,
//   defense,
//   "special-attack": specialAttack,
//   "special-defense": specialDefense,
//   speed,
// };

// const getStats = (stats) => {
//   return stats.reduce((result, { base_stat, stat }) => {
//     result[stat.name] = {
//       base_stat: base_stat,
//       imageUrl: STAT_IMAGES[stat.name],
//     };
//     return result;
//   }, {});
// };

const Layout = ({ name, sprites, stats, isLoading }) => {
  // const statsPokemon = getStats(stats);

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
            {/* {Object.keys(statsPokemon)?.map((name) => (
              <div key={name} className={styles.item}>
                <img
                  src={statsPokemon[name].imageUrl}
                  alt={name}
                  width={30}
                  height={30}
                  className={styles.img}
                />
                {name}: {statsPokemon[name].base_stat}
              </div>
            ))} */}
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
