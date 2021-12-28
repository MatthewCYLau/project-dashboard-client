import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, palette, breakpoints }) =>
    createStyles({
      root: {
        paddingTop: spacing(3),
        paddingBottom: spacing(3),
      },
      loader: {
        margin: "auto auto",
      },
      link: {
        color: palette.text.primary,
        textDecoration: "none",
      },
      chip: {
        marginLeft: "3px",
        marginRight: "3px",
        [breakpoints.down("sm")]: {
          marginTop: "2px",
          marginBottom: "2px",
        },
      },
      pieChartContainer: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "20px",
      },
    }),
  { name: "DashboardPage" }
);
