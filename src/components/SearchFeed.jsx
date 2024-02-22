import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Video from "./Video";
import { fetchData } from "../utils/fetchDataApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchText } = useParams();
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchData(`search?part=snippet&q=${searchText}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchText]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for{" "}
        <span style={{ color: "#FC1503" }}>{searchText}</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};
export default SearchFeed;
