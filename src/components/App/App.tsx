import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "../../store/store";
import { useActions } from "../../hooks/useActions";
import { ActionType } from "../../store/auth/action-types";
import setAuthToken from "../../utils/setAuthToken";
import useStyles from "./App.style";
import createTheme from "../../config/Theme";
import Routes from "../../config/Routes";
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
        <Routes />
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
