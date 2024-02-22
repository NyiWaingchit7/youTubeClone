import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchDataApi";
import ChannelCard from "./ChannelCard";
import Video from "./Video";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <Box sx={{ height: { xs: "150px", md: "300px" } }}>
          <div
            style={{
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
            }}
          />
        </Box>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" sx={{ mx: { xs: 1, sm: "6%", md: "4%", lg: "3%" } }}>
        <Video videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
