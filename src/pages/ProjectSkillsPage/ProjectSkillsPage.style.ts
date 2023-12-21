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
        margin: spacing(0, 0, 2),
      },
      secondaryButton: {
        backgroundColor: palette.text.secondary,
        margin: spacing(3, 0, 2),
      },
      loader: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      projectSkillContainer: {
        display: "flex",
        "& .MuiAutocomplete-root": {
          flex: "1",
          paddingRight: "10px",
        },
      },
      iconContainer: {
        marginTop: "auto",
      },
    }),
  { name: "ProjectSkillsPage" }
);
