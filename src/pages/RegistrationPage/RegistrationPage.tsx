import React from "react";
import { Navigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Box,
  Link as MaterialUILink,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Meta from "../../components/Meta";
import Create from "@material-ui/icons/Create";
import CopyRight from "../../components/CopyRight";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./RegistrationPage.style";

interface RegistrationFormValues {
  email: string;
  name: string;
  password: string;
  password2: string;
}

const RegistrationPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { register, setAlert } = useActions();
  const { isAuthenticated } = useTypedSelector((state) => state.authState);
  const navigate = useNavigate();

  const initialValues: RegistrationFormValues = {
    email: "",
    name: "",
    password: "",
    password2: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      if (values.password !== values.password2) {
        setAlert("Passwords do not match");
      } else {
        register(
          { email: values.email, password: values.password, name: values.name },
          navigate
        );
      }

      actions.setSubmitting(false);
    },
  });

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Grid container component="main" className={styles.root}>
      <Meta title="Project Dashboard" />
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <Create />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Your Account
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
              label="Name"
              name="name"
              autoComplete="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              value={formik.values.password2}
              onChange={formik.handleChange}
            />
            <Button
              className={styles.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <MaterialUILink href="/login" variant="body2">
                  {"Already have an account?"}
                </MaterialUILink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <CopyRight />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
