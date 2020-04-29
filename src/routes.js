import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassoword from "./pages/ResetPassword";
import StoreRegister from "./pages/StoreRegister";
import StoreLogin from "./pages/StoreLogin";
import StoreDashboard from "./pages/StoreDashboard";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardProduct from "./pages/DashboardProduct";
import DashboardOrder from "./pages/DashboardOrder";
import DashboardPromotions from "./pages/DashboardPromotions";
import DashboardSettings from "./pages/DashboardSettings";

import Main from "./pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entrar" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/recuperar" component={ResetPassoword} />
        <Route path="/main" component={Main} />
        <Route path="/petshop/cadastro" component={StoreRegister} />
        <Route path="/petshop/entrar" component={StoreLogin} />
        <Route path="/petshop/dashboard" component={StoreDashboard} />
        <Route path="/petshop/profile" component={DashboardProfile} />
        <Route path="/petshop/produtos" component={DashboardProduct} />
        <Route path="/petshop/pedidos" component={DashboardOrder} />
        <Route path="/petshop/promocoes" component={DashboardPromotions} />
        <Route path="/petshop/configuracoes" component={DashboardSettings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
