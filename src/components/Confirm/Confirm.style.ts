import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ palette, spacing }) =>
    createStyles({
      modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: palette.background.paper,
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        padding: spacing(2),
      },
      submit: {
        margin: spacing(3, 0, 2),
      },
      secondaryButton: {
        backgroundColor: palette.text.secondary,
      },
    }),
  { name: "Confirm" }
);
