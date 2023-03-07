import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import Router from "./routes/Router";

import "./static/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainLayout>
      <Router />
    </MainLayout>
  </BrowserRouter>
);
