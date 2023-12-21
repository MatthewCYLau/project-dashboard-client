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
    }),
  { name: "AddSkillPage" }
);
