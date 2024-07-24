import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute role={undefined}>
        <MainLayout />
        <ToastContainer />
      </ProtectedRoute>
    </>
  );
}

export default App;
