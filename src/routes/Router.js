import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "pages/Counter/containers/CounterContainer";
import CountersContainer from "pages/Counters/containers/CountersContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<CountersContainer />} />
    </Routes>
  );
};

export default Router;
