import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "../../store/store";
import { useActions } from "../../hooks/useActions";
import { ActionType } from "../../store/auth/action-types";
import setAuthToken from "../../utils/setAuthToken";
import useStyles from "./App.style";
import createTheme from "../../config/Theme";
import PrivateRoute from "../../config/PrivateRoute";
import LandingPage from "../../pages/LandingPage";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import AddSkillPage from "../../pages/AddSkillPage";
import AddProjectPage from "../../pages/AddProjectPage";
import ProjectPage from "../../pages/ProjectPage";
import ProjectSkillsPage from "../../pages/ProjectSkillsPage";
import NotFoundPage from "../../pages/NotFoundPage";

import Header from "../Header";
import Alert from "../Alert";

export const ColorModeContext = React.createContext({
  mode: "",
  toggleColorMode: () => {},
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const { loadUser } = useActions();
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    loadUser();
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: ActionType.LOGOUT });
    });
  }, [loadUser]);

  const styles = useStyles();

  return (
    <Router>
      <div className={styles.root}>
        <Header />
        <Alert />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<RegistrationPage />} />
          <Route
            path="dashboard"
            element={<PrivateRoute component={DashboardPage} />}
          />
          <Route
            path="add-skill"
            element={<PrivateRoute component={AddSkillPage} />}
          />
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
      </div>
    </Router>
  );
};

const AppWithTheme = () => {
  const [mode, setMode] = React.useState("light");
  const toggleColorMode = () => {
    if (["sign-up", "login"].some((v) => window.location.href.includes(v))) {
      setAuthToken("");
    }
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(() => createTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppWithTheme;
