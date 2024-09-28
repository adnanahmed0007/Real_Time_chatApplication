import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Sign from "./signup";
import Home from "./Home";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <div className="Routes1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </div>
    </div>
  );
}
