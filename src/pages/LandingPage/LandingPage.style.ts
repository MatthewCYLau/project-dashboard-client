import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing, breakpoints, palette }) =>
    createStyles({
      landing: {
        position: "relative",
        background:
          'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80") no-repeat center center/cover',
        height: "100vh",
      },
      darkOverlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      },
    }),
  { name: "LandingPage" }
);
