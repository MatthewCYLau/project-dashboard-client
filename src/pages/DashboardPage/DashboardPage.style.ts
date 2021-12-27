import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, palette }) =>
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
      },
    }),
  { name: "DashboardPage" }
);
