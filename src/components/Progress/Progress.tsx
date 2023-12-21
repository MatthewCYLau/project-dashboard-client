import React from "react";
import { Box, LinearProgress } from "@material-ui/core";

import useStyles from "./Progress.style";

type ProgressProps = {
  value: number;
};

const Progress: React.FunctionComponent<ProgressProps> = ({ value }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container} sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default Progress;
