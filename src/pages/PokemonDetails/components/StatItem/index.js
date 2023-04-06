import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const StatItem = ({ statName, statValue, image }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt="" className={styles.img} />
      <div>
        {statName}: {statValue}
      </div>
    </div>
  );
};

StatItem.propTypes = {
  image: PropTypes.string,
  statName: PropTypes.string,
  statValue: PropTypes.number,
};

export default StatItem;
