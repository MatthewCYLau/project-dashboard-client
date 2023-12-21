import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, palette, breakpoints }) =>
    createStyles({
      root: {
        paddingTop: spacing(3),
        paddingBottom: spacing(3),
        minHeight: "calc(100vh - 64px);",
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
      chartsContainer: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "20px",
        [breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      },
    }),
  { name: "DashboardPage" }
);
