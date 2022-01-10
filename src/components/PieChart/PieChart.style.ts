import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      label: {
        margin: spacing(1, 0, 1),
      },
    }),
  { name: "PieChart" }
);
