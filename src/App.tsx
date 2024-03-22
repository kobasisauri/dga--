import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/Home";
import Error from "./pages/Error";

import "./App.css";
import Autorisation from "./pages/Authorisation";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Route>
      <Route path="/authrorisation" element={<Autorisation />} />
    </Routes>
  );
}

export default App;
