import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import { Sector } from "../../constants";
import Meta from "../../components/Meta";
import Progress from "../../components/Progress";
import Dropdown from "../../components/Dropdown";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import useStyles from "./AddProjectPage.style";
import { useNavigate } from "react-router-dom";

interface AddProjectFormValues {
  name: string;
  sector: string;
}

const AddProjectPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { addProject } = useActions();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<number>(1);

  const initialValues: AddProjectFormValues = {
    name: "",
    sector: Sector.FinancialServices,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      addProject(values, navigate);
      actions.setSubmitting(false);
    },
  });

  const handleChange = (
    event: React.ChangeEvent<{ value: string | unknown }>
  ) => {
    event.preventDefault();
    const { value } = event.target;

    formik.setFieldValue("sector", value);
  };

  const returnFormByStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <>
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
              disabled={false}
            />
            <span
              className={styles.nextButton}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </span>
          </>
        );
      case 2:
        return (
          <>
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
          </>
        );
      default:
        return "foo";
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.root}>
      <Meta title="Add Project" />
      <CssBaseline />
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a project
        </Typography>
        <Progress value={(currentStep / 2) * 100} />
        <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
          {returnFormByStep(currentStep)}
        </form>
      </div>
    </Container>
  );
};

export default AddProjectPage;
