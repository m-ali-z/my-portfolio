import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
const RightContent = () => {
  return (
    <div className="text-white text-6xl flex justify-end absolute right-[10%] bottom-[10%] z-10">
      <div className="flex flex-col items-center gap-4">
        <div className="border-[#f4d03f] border-l-4 h-[15rem]" />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
};

export default RightContent;
