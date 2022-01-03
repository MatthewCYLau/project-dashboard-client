import { Navigate } from "react-router-dom";
import React from "react";
import { Grid, Button } from "@material-ui/core";
import Meta from "../../components/Meta";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./LandingPage.style";

const LandingPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { isAuthenticated } = useTypedSelector((state) => state.authState);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <section className={styles.landing}>
      <Meta title="Project Dashboard" />
      <div className={styles.darkOverlay}>
        <div className={styles.landingInner}>
          <h1>Project Dashboard</h1>
          <p>Track skills used in various projects</p>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" href="/sign-up">
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" href="/login">
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
