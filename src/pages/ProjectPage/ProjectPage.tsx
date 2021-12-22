import React, { useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./ProjectPage.style";
import { RouteComponentProps } from "react-router";

interface AddProjectFormValues {
  name: string;
}

interface MatchParams {
  id: string;
}

const ProjectPage: React.FunctionComponent<RouteComponentProps<MatchParams>> =
  ({ history, match }) => {
    const styles = useStyles();
    const { getProjectById } = useActions();
    const { loading, project } = useTypedSelector(
      (state) => state.projectState
    );

    const initialValues: AddProjectFormValues = {
      name: project.name,
    };

    useEffect(() => {
      getProjectById(match.params.id);
    }, []);

    const formik = useFormik({
      enableReinitialize: true,
      initialValues,
      onSubmit: (values, actions) => {
        // editProject(values, history);
        actions.setSubmitting(false);
      },
    });

    return loading ? (
      <CircularProgress />
    ) : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update project
          </Typography>
          <form
            className={styles.form}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Project name"
              name="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Save Project
            </Button>
          </form>
        </div>
      </Container>
    );
  };

export default ProjectPage;
