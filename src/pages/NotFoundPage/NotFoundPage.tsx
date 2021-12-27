import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./NotFoundPage.style";

const NotFoundPage = () => {
  const styles = useStyles();
  return (
    <Container component="main" maxWidth="lg" className={styles.root}>
      <Typography variant="h5" component="p">
        {"Oops! We couldn't find the page you were looking for."}
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
