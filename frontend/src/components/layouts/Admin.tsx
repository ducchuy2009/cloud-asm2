import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/layouts/DemoNavbar";
import Footer from "components/layouts/Footer";
import Sidebar from "components/layouts/Sidebar";

import routes from "utils/routes";

let ps: any;

function Dashboard(props: any) {
  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} bgColor="black" activeColor="warning" />
      <div className="main-panel">
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
        <Footer fluid />
      </div>
    </div>
  );
}

export default Dashboard;
