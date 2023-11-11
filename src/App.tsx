import { Routes, Route } from "react-router-dom";
import MainPage from "./layout/MainPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/home" element={<MainPage />} />

      <Route path="/:userHandle" element={<ProfilePage />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
