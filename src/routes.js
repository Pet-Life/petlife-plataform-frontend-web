import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassoword from "./pages/ResetPassword";
import StoreRegister from "./pages/StoreRegister";
import StoreLogin from "./pages/StoreLogin";

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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
