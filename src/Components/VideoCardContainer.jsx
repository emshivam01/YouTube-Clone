import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import CardShimmer from "./ShimmerUI/CardShimmer";

const YOUTUBE_VIDEO_URL = import.meta.env.VITE_YOUTUBE_API_URL;
const CHANNEL_DETAIL_URL = import.meta.env.VITE_CHANNEL_DETAILS_API;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_URL);
    const json = await response.json();
    setVideos(
      json.items.filter((item) => item.snippet?.thumbnails?.maxres?.url)
    );
    setLoading(false);
    console.log(
      json.items.filter((item) => item.snippet?.thumbnails?.maxres?.url)
    );
  };

  return (
    <div className="px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {loading
          ? Array.from({ length: 50 }).map((_, index) => (
              <CardShimmer key={index} />
            ))
          : videos.map((video) => (
              <VideoCard
                title={video?.snippet?.title}
                thumbnail={
                  video?.snippet?.thumbnails?.maxres?.url
                    ? video?.snippet?.thumbnails?.maxres?.url
                    : video?.snippet?.thumbnails?.standard?.url
                }
                channelTitle={video?.snippet?.channelTitle}
                publishedAt={video?.snippet?.publishedAt}
                viewCount={video?.statistics?.viewCount}
                key={video?.id}
              />
            ))}
      </div>
    </div>
  );
};

export default VideoCardContainer;
