import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () =>
    createStyles({
      container: {
        position: "absolute",
        top: "64px",
        width: "100%",
        zIndex: 1,
      },
    }),
  { name: "Alert" }
);
