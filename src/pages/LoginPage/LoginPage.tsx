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
import Meta from "../../components/Meta";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CopyRight from "../../components/CopyRight";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./LoginPage.style";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { login } = useActions();
  const { isAuthenticated } = useTypedSelector((state) => state.authState);

  const initialValues: LoginFormValues = { email: "", password: "" };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      login(values);
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <Button
              className={styles.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login In
            </Button>
            <Grid container>
              <Grid item>
                <MaterialUILink href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default LoginPage;
