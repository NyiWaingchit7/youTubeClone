import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Video from "./Video";
import { fetchData } from "../utils/fetchDataApi";

const Feed = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchData(`search?part=snippet&q=${selected}`).then((data) => {
      setVideos(data.items);
    });
  }, [selected]);
  return (
    <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar selected={selected} setSelected={setSelected} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selected} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
