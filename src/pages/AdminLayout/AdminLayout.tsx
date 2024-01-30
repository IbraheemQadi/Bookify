// import AdminSearch from "@/component/AdminSearch";
import CityEditForm from "@/component/CityEditForm";
import Dashboard from "@/component/Dashboard";
import {
  AdminDrawerProvider,
  useAdminDrawer,
} from "@/context/AdminDrawerContext";
import { Drawer } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

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

  const renderForm = () => {
    switch (pathname) {
      case "/admin/cities":
        return <CityEditForm />;
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
        {/* <AdminSearch /> */}
        <Outlet />
      </Dashboard>
    </>
  );
}
