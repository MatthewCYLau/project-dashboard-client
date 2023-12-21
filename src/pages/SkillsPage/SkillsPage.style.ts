import { createStyles, makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  ({ spacing }) =>
    createStyles({
      root: {
        paddingTop: spacing(3),
        paddingBottom: spacing(3),
        minHeight: "calc(100vh - 64px);",
      },
    }),
  { name: "SkillsPage" }
);
