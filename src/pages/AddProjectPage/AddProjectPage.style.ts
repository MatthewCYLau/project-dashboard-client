import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, palette }) =>
    createStyles({
      root: {
        minHeight: "calc(100vh - 64px);",
      },
      paper: {
        marginTop: spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: spacing(1),
        backgroundColor: palette.text.primary,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: spacing(1),
      },
      submit: {
        margin: spacing(3, 0, 2),
      },
      nextButton: {
        backgroundColor: palette.primary.main,
        width: "100%",
        display: "inline-flex",
        color: "white",
        fontWeight: 500,
        lineHeight: "1.75",
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        padding: "6px 16px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        cursor: "pointer",
        margin: "24px 0px 16px",
      },
      dropdown: {
        width: "100%",
      },
    }),
  { name: "AddProjectPage" }
);
