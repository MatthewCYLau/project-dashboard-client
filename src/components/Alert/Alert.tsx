import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Alert from "@mui/material/Alert";
import useStyles from "./Alert.style";

const CustomAlert: React.FunctionComponent = () => {
  const { alerts } = useTypedSelector((state) => state.alertState);
  const { removeAlert } = useActions();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert
            onClose={() => removeAlert(alert.id)}
            key={alert.id}
            severity={alert.severity}
          >
            {alert.message}
          </Alert>
        ))}
    </div>
  );
};

export default CustomAlert;
