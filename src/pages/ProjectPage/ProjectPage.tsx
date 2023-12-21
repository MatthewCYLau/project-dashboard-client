import React, { useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  Modal,
} from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import { Sector } from "../../constants";
import Dropdown from "../../components/Dropdown";
import Meta from "../../components/Meta";
import Comments from "../../components/Comments";
import Confirm from "../../components/Confirm";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./ProjectPage.style";
import { useParams, useNavigate } from "react-router-dom";

interface UpdateProjectFormValues {
  name: string;
  sector: string;
}

const ProjectPage: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const styles = useStyles();
  const { getProjectById, updateProjectById, deleteProjectById } = useActions();
  const { loading, project } = useTypedSelector((state) => state.projectState);
  const { user } = useTypedSelector((state) => state.authState);
  const [open, setOpen] = React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: UpdateProjectFormValues = {
    name: project.name,
    sector: project.sector,
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

  const handleOnEditClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsEditMode(true);
  };

  const handleChange = (
    event: React.ChangeEvent<{ value: string | unknown }>
  ) => {
    event.preventDefault();
    const { value } = event.target;

    formik.setFieldValue("sector", value);
  };

  return loading ? (
    <CircularProgress className={styles.loader} />
  ) : (
    <Container component="main" maxWidth="xs" className={styles.root}>
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
          <Dropdown
            labelId="sector-label"
            id="sector"
            value={formik.values.sector}
            label="Sector"
            onChange={handleChange}
            renderValue={() => formik.values.sector}
            options={[
              Sector.FinancialServices,
              Sector.PublicSector,
              Sector.PrivateSector,
            ]}
            disabled={!isEditMode}
          />
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
            disabled={!isEditMode}
          />
          {isEditMode ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Save Project
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              onClick={handleOnEditClick}
            >
              Edit Project
            </Button>
          )}
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
        {user?._id === project.created_by && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={styles.deleteButton}
            onClick={handleOpen}
          >
            Delete Project
          </Button>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="delete-project"
          aria-describedby="delete-project-confirmation"
        >
          <Confirm
            message={`Are you sure you want to delete project ${project.name}?`}
            onConfirm={() => id && deleteProjectById(id, navigate)}
            onCancel={handleClose}
          />
        </Modal>
      </div>
      {id && <Comments projectId={id} />}
    </Container>
  );
};

export default ProjectPage;
