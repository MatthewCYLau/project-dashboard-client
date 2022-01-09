import React, { useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  Modal,
  Paper,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import Meta from "../../components/Meta";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./ProjectPage.style";
import { useParams, useNavigate } from "react-router-dom";

interface AddProjectFormValues {
  name: string;
}

const ProjectPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const styles = useStyles();
  const { getProjectById, updateProjectById, deleteProjectById } = useActions();
  const { loading, project } = useTypedSelector((state) => state.projectState);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: AddProjectFormValues = {
    name: project.name,
  };

  useEffect(() => {
    id && getProjectById(id);
    // eslint-disable-next-line
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values, actions) => {
      id && updateProjectById(id, values, navigate);
      actions.setSubmitting(false);
    },
  });

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="xs">
      <Meta title={`Project - ${project.name}`} />
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update project
        </Typography>
        <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.secondaryButton}
          onClick={() => navigate(`/projects/${id}/project-skills`)}
        >
          Update Project Skills
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.deleteButton}
          onClick={handleOpen}
        >
          Delete Project
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="delete-project"
          aria-describedby="delete-project-confirmation"
        >
          <Paper className={styles.modal}>
            <Typography id="modal-modal-title">Text in a modal</Typography>
          </Paper>
        </Modal>
      </div>
    </Container>
  );
};

export default ProjectPage;
