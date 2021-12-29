import React from "react";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useTypedSelector } from "../hooks/useTypedSelector";

type PrivateRouteProps = {
  component: React.ComponentType<any>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const { isAuthenticated, loading } = useTypedSelector(
    (state) => state.authState
  );
  if (loading) return <CircularProgress />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
