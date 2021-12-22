import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AddSkillPage from "../pages/AddSkillPage";
import AddProjectPage from "../pages/AddProjectPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectSkillsPage from "../pages/ProjectSkillsPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/sign-up" component={RegistrationPage} />
    <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    <PrivateRoute exact path="/add-skill" component={AddSkillPage} />
    <PrivateRoute exact path="/add-project" component={AddProjectPage} />
    <PrivateRoute exact path="/projects/:id" component={ProjectPage} />
    <PrivateRoute
      exact
      path="/projects/:id/project-skills"
      component={ProjectSkillsPage}
    />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
