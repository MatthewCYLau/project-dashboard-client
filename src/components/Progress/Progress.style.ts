import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      container: {
        margin: spacing(2, 0),
      },
    }),
  { name: "Progress" }
);
