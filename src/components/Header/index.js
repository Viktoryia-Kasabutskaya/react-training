import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import startCase from "lodash/startCase";
import omit from "lodash/omit";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      {Object.entries(omit(ROUTE_NAMES, ["POKEMON_DETAILS"])).map(
        ([routeName, path]) => (
          <Link
            key={path}
            to={path}
            className={styles.navigateLink}
            style={{ color: path === pathname ? "yellow" : "#f0ffff" }}
          >
            {startCase(routeName)}
          </Link>
        )
      )}
    </div>
  );
};

export default Header;
