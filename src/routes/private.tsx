import { Navigate, Outlet } from "react-router";
import { useEffect } from "react";
import { useUsername } from "../store/useUsername";

export function PrivateRoutes() {
  const username = useUsername(state => state.username);
  const getUsername = useUsername(state => state.getUsername);

  useEffect(() => {
    getUsername();
  }, [getUsername]);

  if (!username && !localStorage.getItem("username")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}