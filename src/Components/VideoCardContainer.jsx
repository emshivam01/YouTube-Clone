import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import CardShimmer from "./ShimmerUI/CardShimmer";
import { useSelector } from "react-redux";
import store from "../Utils/store";
import { Link } from "react-router-dom";

const YOUTUBE_VIDEO_URL = import.meta.env.VITE_YOUTUBE_API_URL;
const CHANNEL_DETAIL_URL = import.meta.env.VITE_CHANNEL_DETAILS_API;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

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
  };

  return (
    <div className="sm:px-2  md:px-2 mt-12  ">
      <div
        className={`p-2 grid grid-cols-1 sm:grid-cols-2 gap-5 ${
          isSideBarOpen ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" : "lg:grid-cols-4 2xl:grid-cols-6"
        }`}
      >
        {loading
          ? Array.from({ length: 50 }).map((_, index) => (
              <CardShimmer key={index} />
            ))
          : videos.map((video) => (
              <Link to={"/watch?v=" + video.id} key={video?.id}>
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
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default VideoCardContainer;
