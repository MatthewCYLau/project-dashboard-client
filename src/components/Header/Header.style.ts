import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      titleContainer: {
        marginRight: spacing(3),
        flexGrow: 1,
      },
      title: {
        fontSize: "1rem",
        "& .fas": {
          marginRight: "10px",
        },
      },
      button: {
        "& .fas": {
          marginRight: "10px",
        },
      },
      toolbar: {
        flexWrap: "wrap",
        minHeight: "64px",
      },
      menuIcon: {
        color: "white",
      },
    }),
  { name: "Header" }
);
