import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      flexDirection={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
    >
      {videos?.map((d, index) => (
        <Box key={index}>
          {d?.id?.videoId && <VideoCard video={d} />}
          {d?.id?.channelId && <ChannelCard channelDetail={d} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Video;
