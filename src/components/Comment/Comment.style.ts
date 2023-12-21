import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      root: {
        margin: spacing(0, 0, 2),
      },
    }),
  {
    name: "Comment",
  }
);
