import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, breakpoints }) =>
    createStyles({
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [breakpoints.down("sm")]: {
          margin: spacing(0, 0, 4),
        },
      },
      label: {
        margin: spacing(1, 0, 1),
      },
    }),
  { name: "PieChart" }
);
