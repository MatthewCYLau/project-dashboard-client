import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, palette }) =>
    createStyles({
      root: {
        height: "calc(100vh - 64px);",
      },
      image: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundColor: palette.text.primary,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      paper: {
        margin: spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: spacing(1),
        backgroundColor: palette.text.primary,
      },
      form: {
        width: "100%",
        marginTop: spacing(1),
      },
      submit: {
        margin: spacing(3, 0, 2),
      },
    }),
  { name: "LoginPage" }
);
