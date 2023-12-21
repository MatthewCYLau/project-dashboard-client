import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import Meta from "../../components/Meta";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import useStyles from "./AddSkillPage.style";
import { useNavigate } from "react-router-dom";

interface AddSkillFormValues {
  name: string;
}

const AddSkillPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { addSkill } = useActions();

  const initialValues: AddSkillFormValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      addSkill(values, navigate);
      actions.setSubmitting(false);
    },
  });

  return (
    <Container component="main" maxWidth="xs" className={styles.root}>
      <Meta title="Add Skill" />
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a skill
        </Typography>
        <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Skill name"
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
            Add Skill
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddSkillPage;
