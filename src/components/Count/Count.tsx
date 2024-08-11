import React from "react";
import { Typography, Container, Paper } from "@material-ui/core";
import useStyles from "./Count.style";
import { Link } from "react-router-dom";

type CountProps = {
  title: string;
  count: number;
};
const Count: React.FunctionComponent<CountProps> = ({ title, count }) => {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Paper elevation={3} className={styles.paper}>
        <Link to="/skills" className={styles.link}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h2">{count}</Typography>
        </Link>
      </Paper>
    </Container>
  );
};

export default Count;
