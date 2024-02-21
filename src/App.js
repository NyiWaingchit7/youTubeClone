import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
