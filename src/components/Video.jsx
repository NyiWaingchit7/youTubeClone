import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Video = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
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
