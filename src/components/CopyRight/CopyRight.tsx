import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import useStyles from "./CopyRight.style";

const CopyRight: React.FC = () => {
  const styles = useStyles();

  return (
    <Typography variant="body2" className={styles.link} align="center">
      {"Copyright © "}
      <Link className={styles.link} to="/">
        Project Dashboard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
