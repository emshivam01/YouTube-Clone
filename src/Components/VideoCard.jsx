import { BsDot } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const VideoCard = ({
  title,
  channelTitle,
  viewCount,
  publishedAt,
  thumbnail,
}) => {
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

  return (
    <div className="py-2 mb-1 hover:scale-105 transition duration-150 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <div className="overflow-hidden">
        <img
          className="rounded  w-full lg:w-80 bg-cover "
          src={thumbnail}
          alt="thumbnail"
        />
      </div>

      <div className="mt-2">
        <p className="font-semibold text-lg truncate" title={title}>
          {title}
        </p>
        <div className="flex items-center gap-1">
          <span className="font-medium text-lg">{channelTitle}</span>
          <MdVerified />
        </div>
        <div className="flex items-center gap-1 mt-1 ">
          <span className="font-medium ">
            {formatNumberToYouTubeStyle(viewCount)} views
          </span>
          <BsDot />
          <span className="font-medium ">3 hours ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
