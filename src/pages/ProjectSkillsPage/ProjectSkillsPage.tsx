import React, { useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./ProjectSkillsPage.style";
import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

const ProjectSkillsPage: React.FunctionComponent<
  RouteComponentProps<MatchParams>
> = ({ match }) => {
  const styles = useStyles();
  const { getProjectById, getSkills } = useActions();
  const { loading, project } = useTypedSelector((state) => state.projectState);
  const { skills } = useTypedSelector((state) => state.skillState);
  console.log(loading);

  const options = skills.map((skill) => skill.name);

  useEffect(() => {
    getProjectById(match.params.id);
    getSkills();
  }, []);

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add project skills
        </Typography>
        <form className={styles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Project name"
            name="name"
            autoFocus
            disabled={true}
            value={project.name}
          />
          <div className={styles.projectSkillContainer}>
            <Autocomplete
              disablePortal
              id="project-skills"
              options={options}
              renderInput={(params) => <TextField {...params} label="Skill" />}
            />
            <RemoveCircle />
          </div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={styles.secondaryButton}
          >
            <AddIcon />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Add Project Skills
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProjectSkillsPage;
