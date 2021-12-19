import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import useStyles from "./Header.style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App/App";

const Header: React.FunctionComponent = () => {
  const styles = useStyles();
  const context = React.useContext(ColorModeContext);
  const { isAuthenticated, loading } = useTypedSelector(
    (state) => state.authState
  );
  const { logout } = useActions();

  const authLinks = (
    <nav>
      <IconButton onClick={context.toggleColorMode} color="inherit">
        {context.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        disableElevation
        to="/dashboard"
      >
        <i className="fas fa-user" />
        Dashboard
      </Button>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        disableElevation
        to="/add-project"
      >
        <i className="fas fa-plus" />
        Add Project
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={logout}
      >
        Logout
      </Button>
    </nav>
  );
  const guestLinks = (
    <nav>
      <IconButton onClick={context.toggleColorMode} color="inherit">
        {context.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        disableElevation
        to="/sign-up"
      >
        Sign Up
      </Button>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        disableElevation
        to="/login"
      >
        Login
      </Button>
    </nav>
  );
  return (
    <AppBar component="header" position="static">
      <Toolbar className={styles.toolbar}>
        <div className={styles.title}>
          <Button
            component={Link}
            variant="contained"
            color="primary"
            disableElevation
            to="/"
          >
            <i className="fas fa-code" /> Project Dashboard
          </Button>
        </div>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
