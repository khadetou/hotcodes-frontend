import { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const Video: FC<{ play?: boolean; setPlay?: () => void }> = ({
  play,
  setPlay,
}) => {
  const onPlayerReady: YouTubeProps["onReady"] = (e: any) => {
    if (play) {
      e.target.playVideo();
    } else {
      e.target.pauseVideo();
    }
  };
  const opts: YouTubeProps["opts"] = {
    width: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoPlay: 1,
      play: play ? 1 : 0,
    },
  };
  return (
    <YouTube
      iframeClassName="w-full h-full"
      className={`fixed top-1/2 -translate-y-1/2 z-60 left-1/2 transition-all ease-linear duration-500 -translate-x-1/2 border-8 shadow-[0_0_10px_rgba(0,0,3)] rounded-md !h-1/3 lg:!h-3/4 xl:!h-[680px] border-white w-4/5    ${
        !play ? "!opacity-0 !invisible !translate-y-[100%]" : "visible"
      }`}
      videoId="7i6aIBpA8tE"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default Video;
