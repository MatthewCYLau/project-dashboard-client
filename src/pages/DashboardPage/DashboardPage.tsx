import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import useStyles from "./DashboardPage.style";

const DashboardPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { loadUser, getProjecs } = useActions();
  const { loading, user } = useTypedSelector((state) => state.authState);
  const { projects } = useTypedSelector((state) => state.projectState);

  useEffect(() => {
    getProjecs();
    loadUser();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div>Foo</div>
    </Container>
  );
};

export default DashboardPage;
