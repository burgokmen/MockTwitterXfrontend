import { Routes, Route } from "react-router-dom";
import MainPage from "./layout/MainPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RegisterFormPage from "./pages/RegisterFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />

      <Route path="/register" element={<RegisterFormPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/home" element={<MainPage />} />

      <Route path="/:userHandle" element={<ProfilePage />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
