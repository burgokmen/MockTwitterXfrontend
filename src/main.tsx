import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import ProfileProvider from "./contexts/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProfileProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProfileProvider>
);
