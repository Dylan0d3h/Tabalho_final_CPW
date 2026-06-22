import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";

import {
  ToastContainer,
  toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  useEffect(() => {

    const online = () => {
      toast.success(
        "Conectado à internet"
      );
    };

    const offline = () => {
      toast.error(
        "Modo Offline"
      );
    };

    window.addEventListener(
      "online",
      online
    );

    window.addEventListener(
      "offline",
      offline
    );

    return () => {

      window.removeEventListener(
        "online",
        online
      );

      window.removeEventListener(
        "offline",
        offline
      );

    };

  }, []);

  return (
    <>
      <AppRoutes />

      <ToastContainer
        position="top-right"
      />
    </>
  );
}

export default App;