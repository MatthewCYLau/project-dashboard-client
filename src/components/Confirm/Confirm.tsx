import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import useStyles from "./Confirm.style";

type ConfirmProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Loader: React.FunctionComponent<ConfirmProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={styles.modal}>
      <Typography variant="subtitle1" component="div">
        {message}
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={onConfirm}
        className={styles.submit}
      >
        Confirm
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={onCancel}
        color="primary"
        className={styles.secondaryButton}
      >
        Cancel
      </Button>
    </Container>
  );
};

export default Loader;
