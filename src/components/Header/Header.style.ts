import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      title: {
        marginRight: spacing(3),
        flexGrow: 1,
      },
      toolbar: {
        flexWrap: "wrap",
        minHeight: "64px",
      },
    }),
  { name: "Header" }
);
