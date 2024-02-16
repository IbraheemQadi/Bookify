import useWelcomeToast from "@/hooks/useWelcomeToast";
import { Drawer } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import CityControlForm from "../CitiesDashboard/components/CityControlForm";
import Dashboard from "./components/Dashboard";
import { AdminDrawerProvider, useAdminDrawer } from "./context/AdminDrawerContext";

export default function AdminLayout() {
  return (
    <AdminDrawerProvider>
      <AdminLayoutBase />
    </AdminDrawerProvider>
  );
}

function AdminLayoutBase() {
  const { pathname } = useLocation();
  const { isOpen, closeDrawer } = useAdminDrawer();
  useWelcomeToast();

  const renderForm = () => {
    switch (pathname) {
      case "/admin":
        return <CityControlForm />;
      case "/admin/hotels":
        return <div>Hotels Form</div>;
      default:
        return <div>Rooms Form</div>;
    }
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          closeDrawer();
        }}
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
      >
        {renderForm()}
      </Drawer>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </>
  );
}
