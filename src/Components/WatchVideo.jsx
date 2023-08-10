import { useDispatch } from "react-redux";
import { disableSidebar } from "../Utils/AppSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const WatchVideo = () => {
  const [videoDetails, setVideoDetails] = useState();
  const dispatch = useDispatch();

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const formatNumberToYouTubeStyle = (number) => {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + number).length / 3);
    let shortNum = parseFloat(
      (suffixNum !== 0
        ? number / Math.pow(1000, suffixNum)
        : number
      ).toPrecision(2)
    );
    if (shortNum % 1 !== 0) {
      shortNum = shortNum.toFixed(1);
    }
    return shortNum + suffixes[suffixNum];
  };

  const disableSidebarMenu = () => {
    dispatch(disableSidebar());
  };

  const getVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );

    const json = await data.json();

    setVideoDetails(json.items[0]);
    console.log(json.items[0]);
  };

  useEffect(() => {
    disableSidebarMenu();
    getVideo();
  }, []);

  return (
    <div className="px-2 mt-6 ">
      <iframe
        className=" max-w-full rounded shadow-md"
        width="400"
        height="220"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // Add autoplay and mute parameters
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <div className="mt-3  ">
        <p className="font-semibold text-lg ">{videoDetails?.snippet?.title}</p>

        <div className="flex items-center gap-1  text-base">
          <span className="font-normal">
            {`${formatNumberToYouTubeStyle(
              videoDetails?.statistics?.viewCount
            )} 
            views`}
          </span>
          <BsDot />
          <span className="font-medium ">3 hours ago</span>
        </div>

        <div className="mt-1">
          <span className="font-medium text-base">
            {videoDetails?.snippet?.channelTitle}
          </span>
        </div>

        <div className="bg-gray-300 h-20 w-full mt-4 rounded shadow-md">
        
        
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
