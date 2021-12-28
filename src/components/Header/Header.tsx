import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./Header.style";
import { useTheme } from "@material-ui/core/styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ColorModeContext } from "../App/App";

const Header: React.FunctionComponent = () => {
  const styles = useStyles();
  const theme = useTheme();

  const context = React.useContext(ColorModeContext);
  const { isAuthenticated, loading } = useTypedSelector(
    (state) => state.authState
  );
  const { logout } = useActions();

  // set-up mobile menu
  const isMobile = useMediaQuery(
    theme.breakpoints.down(isAuthenticated ? "md" : "sm")
  );
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const authLinks = (
    <nav>
      <IconButton onClick={context.toggleColorMode} color="inherit">
        {context.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        className={styles.button}
        disableElevation
        to="/dashboard"
      >
        <i className="fas fa-chart-bar"></i>
        Dashboard
      </Button>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        className={styles.button}
        disableElevation
        to="/add-project"
      >
        <i className="fas fa-plus" />
        Add Project
      </Button>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        className={styles.button}
        disableElevation
        to="/add-skill"
      >
        <i className="fas fa-book-open" />
        Add Skill
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
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
        <div className={styles.titleContainer}>
          <Button
            className={styles.title}
            component={Link}
            variant="contained"
            color="primary"
            disableElevation
            to="/"
          >
            <i className="fas fa-code" /> Project Dashboard
          </Button>
        </div>
        {!loading && !isMobile && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        {!loading && isMobile && (
          <IconButton edge="start" aria-label="menu" onClick={handleClick}>
            {open ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </IconButton>
        )}
        {!loading && isMobile && open && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {!isAuthenticated ? (
              <Fragment>
                <MenuItem onClick={handleClose} component={Link} to="/login">
                  Login
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/sign-up">
                  Sign Up
                </MenuItem>
              </Fragment>
            ) : (
              <Fragment>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/dashboard"
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/add-project"
                >
                  Add Project
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/add-skill"
                >
                  Add Skill
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </Fragment>
            )}
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
