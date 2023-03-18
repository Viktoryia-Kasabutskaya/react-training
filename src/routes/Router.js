import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "pages/Counter/containers/CounterContainer";
import CountersContainer from "pages/Counters/containers/CountersContainer";
import TodosContainer from "pages/TodoList/containers/TodosContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<CountersContainer />} />
      <Route path={ROUTE_NAMES.TODO_LIST} element={<TodosContainer />} />
      <Route path="*" element={<h2>404 NOT FOUND</h2>} />
    </Routes>
  );
};

export default Router;
