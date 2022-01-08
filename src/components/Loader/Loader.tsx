import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useStyles from "./Loader.style";

const Loader: React.FunctionComponent = () => {
  const styles = useStyles();

  return <CircularProgress className={styles.loader} />;
};

export default Loader;
