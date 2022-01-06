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
import Email from "@material-ui/icons/Email";
import CopyRight from "../../components/CopyRight";
import { useFormik } from "formik";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyles from "./EmailVerificationPage.style";

interface EmailVerificationFormValues {
  code: string;
}

const EmailVerificationPage: React.FunctionComponent = () => {
  const styles = useStyles();
  const { verifyEmail, triggerVerificationEmail } = useActions();
  const { isAuthenticated, registrationEmail } = useTypedSelector(
    (state) => state.authState
  );

  const initialValues: EmailVerificationFormValues = {
    code: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      verifyEmail({ email: registrationEmail, code: values.code });
      actions.setSubmitting(false);
    },
  });

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const resendVerificationCode = () => {
    triggerVerificationEmail(registrationEmail);
  };

  return (
    <Grid container component="main" className={styles.root}>
      <Meta title="Verify Email" />
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <Email />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify Email
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
              label="Email"
              name="email"
              autoFocus
              disabled={true}
              value={registrationEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="code"
              label="Email Verification Code"
              name="code"
              autoComplete="code"
              value={formik.values.code}
              onChange={formik.handleChange}
            />
            <Button
              className={styles.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Grid container>
              <Grid item>
                <MaterialUILink
                  href="#"
                  variant="body2"
                  onClick={() => resendVerificationCode()}
                >
                  {"Resend code"}
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

export default EmailVerificationPage;
