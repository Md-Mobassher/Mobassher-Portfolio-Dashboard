import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
