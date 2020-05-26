import React, { useContext } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "./history";
import { Context } from "./Context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StoreRegister from "./pages/StoreRegister";
import StoreLogin from "./pages/StoreLogin";
import StoreDashboard from "./pages/StoreDashboard";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardProduct from "./pages/DashboardProduct";
import DashboardSettings from "./pages/DashboardSettings";
import ProductPage from "./pages/ProductPage";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import PageNotFound from "./pages/PageNotFound";
import Main from "./pages/Main";

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to="/petshop/entrar" />;
  }

  return <Route {...rest} />;
}

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <CustomRoute path="/" exact component={Home} />
        <CustomRoute path="/entrar" component={Login} />
        <CustomRoute path="/cadastro" component={Register} />
        <CustomRoute path="/principal" component={Main} />
        <CustomRoute path="/petshop/cadastro" component={StoreRegister} />
        <CustomRoute path="/petshop/entrar" component={StoreLogin} />
        <CustomRoute
          isPrivate
          path="/petshop/dashboard"
          component={StoreDashboard}
        />
        <CustomRoute
          isPrivate
          path="/petshop/profile"
          component={DashboardProfile}
        />
        <CustomRoute
          isPrivate
          path="/petshop/produtos"
          component={DashboardProduct}
        />
        <CustomRoute
          isPrivate
          path="/petshop/configuracoes"
          component={DashboardSettings}
        />
        <CustomRoute path="/produto/:id" component={ProductPage} />
        <CustomRoute path="/carrinho" component={ShoppingCardPage} />
        <CustomRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
