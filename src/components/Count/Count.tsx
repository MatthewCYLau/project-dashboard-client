import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Container, Paper } from "@material-ui/core";
import useStyles from "./Count.style";

type CountProps = {
  title: string;
  count: number;
};
const Count: React.FunctionComponent<CountProps> = ({ title, count }) => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={styles.container} onClick={() => navigate(`/skills`)}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h2">{count}</Typography>
      </Paper>
    </Container>
  );
};

export default Count;
