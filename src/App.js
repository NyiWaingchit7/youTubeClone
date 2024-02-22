import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchText" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
