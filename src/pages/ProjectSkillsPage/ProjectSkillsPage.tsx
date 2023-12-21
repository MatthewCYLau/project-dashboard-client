import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  Grid,
  Link as MaterialUILink,
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import Meta from "../../components/Meta";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProjectSkill } from "../../store/projectSkill/interface";
import useStyles from "./ProjectSkillsPage.style";
import { useNavigate, useParams } from "react-router-dom";

const ProjectSkillsPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const projectId = id ? id : "";
  const styles = useStyles();
  const { getProjectById, getSkills, addProjectSkills } = useActions();
  const [projectSkills, setProjectSkills] = useState<ProjectSkill[]>([]);
  const navigate = useNavigate();

  const { loading, project } = useTypedSelector((state) => state.projectState);
  const { skills } = useTypedSelector((state) => state.skillState);

  const options = skills.map((skill) => skill.name);

  const removeItem =
    (index: number) => (_e: React.MouseEvent<HTMLInputElement>) => {
      setProjectSkills([
        ...projectSkills.slice(0, index),
        ...projectSkills.slice(index + 1),
      ]);
    };

  const getSkillIdBySkillName = (name: string | null) => {
    const skilId = skills.find((skill) => skill.name === name)?._id;
    return skilId ? skilId : "";
  };

  const setProjectSkillsState = (index: number, projectSkill: ProjectSkill) => {
    let updatedProjectSkills = [...projectSkills];
    updatedProjectSkills[index] = projectSkill;
    setProjectSkills(updatedProjectSkills);
  };
  useEffect(() => {
    getProjectById(projectId);
    getSkills();
    // eslint-disable-next-line
  }, [projectId]);

  useEffect(() => {
    setProjectSkills(
      project.project_skills.map((v, i) => {
        return {
          name: v.name,
          skill_id: v.skill_id,
        };
      })
    );
  }, [project]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProjectSkills(projectSkills, projectId, navigate);
  };

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="xs" className={styles.root}>
      <Meta title="Add Project Skills" />
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add project skills
        </Typography>
        <form className={styles.form} noValidate onSubmit={(e) => onSubmit(e)}>
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
          {projectSkills.map((v, i) => (
            <div key={i} className={styles.projectSkillContainer}>
              <Autocomplete
                key={i}
                value={projectSkills[i].name}
                disablePortal
                id="project-skills"
                options={options}
                renderInput={(params) => (
                  <TextField {...params} label="Skill" />
                )}
                onChange={(event, newValue) => {
                  setProjectSkillsState(i, {
                    skill_id: getSkillIdBySkillName(newValue),
                    name: newValue,
                  });
                }}
              />
              <div className={styles.iconContainer} onClick={removeItem(i)}>
                <RemoveCircle />
              </div>
            </div>
          ))}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={styles.secondaryButton}
            onClick={() =>
              setProjectSkills((prevState) => [
                ...prevState,
                {
                  name: null,
                  skill_id: "",
                },
              ])
            }
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
          <Grid container>
            <Grid item>
              <MaterialUILink href="/add-skill" variant="body2">
                {"Cannot find a skill?"}
              </MaterialUILink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ProjectSkillsPage;
