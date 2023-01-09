import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LoggedInRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<NotLoggedInRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/register" element={<NotLoggedInRoutes />}>
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
