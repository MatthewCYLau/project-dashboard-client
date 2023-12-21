import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../config/PrivateRoute";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import AddSkillPage from "../pages/AddSkillPage";
import AddProjectPage from "../pages/AddProjectPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectSkillsPage from "../pages/ProjectSkillsPage";
import SkillsPage from "../pages/SkillsPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<RegistrationPage />} />
      <Route path="verify-email" element={<EmailVerificationPage />} />

      <Route
        path="dashboard"
        element={<PrivateRoute component={DashboardPage} />}
      />
      <Route
        path="add-skill"
        element={<PrivateRoute component={AddSkillPage} />}
      />
      <Route path="skills" element={<PrivateRoute component={SkillsPage} />} />
      <Route
        path="add-project"
        element={<PrivateRoute component={AddProjectPage} />}
      />
      <Route
        path="projects/:id"
        element={<PrivateRoute component={ProjectPage} />}
      />
      <Route
        path="projects/:id/project-skills"
        element={<PrivateRoute component={ProjectSkillsPage} />}
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
