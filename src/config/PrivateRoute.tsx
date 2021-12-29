import React from "react";
import { Navigate } from "react-router-dom";
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
  if (loading) return <div>Loading</div>;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
