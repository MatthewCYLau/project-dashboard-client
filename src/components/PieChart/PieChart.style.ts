import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ palette }) =>
    createStyles({
      link: {
        color: palette.text.primary,
        textDecoration: "none",
      },
    }),
  { name: "CopyRight" }
);
