import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<div>Admin Page</div>} />
      </Route>
      <Route element={<PrivateRoutes allowedRoles={["user"]} />}>
        <Route path="/user" element={<div>User Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
