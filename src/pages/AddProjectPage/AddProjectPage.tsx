import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import useStyles from "./AddProjectPage.style";
import { HistoryRouterProps } from "react-router-dom";

interface AddProjectFormValues {
  name: string;
}

const AddProjectPage: React.FunctionComponent<HistoryRouterProps> = ({
  history,
}) => {
  const styles = useStyles();
  const { addProject } = useActions();

  const initialValues: AddProjectFormValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      addProject(values, history);
      actions.setSubmitting(false);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a project
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
            Add Project
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddProjectPage;
