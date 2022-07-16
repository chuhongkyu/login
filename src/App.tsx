import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
