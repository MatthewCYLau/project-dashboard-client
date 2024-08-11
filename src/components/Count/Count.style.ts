import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, breakpoints, palette }) =>
    createStyles({
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [breakpoints.down("sm")]: {
          margin: spacing(0, 0, 4),
        },
      },
      paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: spacing(0, 6),
        height: "120px",
        justifyContent: "center",
      },
      link: {
        color: palette.text.primary,
        textDecoration: "none",
      },
    }),
  { name: "Count" }
);
