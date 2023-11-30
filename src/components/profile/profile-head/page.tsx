import { Button } from "antd";
import Image from "next/image";

const ProfileHead = () => {
  return (
    <div className="h-[550px] shadow rounded-[15px] mb-20 flex flex-col relative">
      <Image
        src="/mock/cover.jpeg"
        alt="cover photos"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 -mb-20 left-8 w-full">
        <div className="grid grid-cols-6">
          <div className="col-span-1">
            <img
              src="/mock/avatar.jpeg"
              className={`h-37 w-37 rounded-full border-[#0866FF] p-[2px] border-[2px]`}
            />
          </div>
          <div className="col-span-3">
            <strong className="bottom-2 absolute text-2xl">
              Mark ZuckerBerg
            </strong>
          </div>
          <div className="col-span-2">
            <div className="bottom-2 absolute right-11">
              <div className="flex flex-row">
                <Button className="mr-2 bg-blue-600 border-none text-white font-bold w-fit text-sm flex items-center justify-center">
                  Theo dõi
                </Button>
                <Button className="mr-2 bg-[#3A3B3C] border-none text-white font-bold w-fit text-sm flex items-center justify-center">
                  Nhắn tin
                </Button>
                <Button className="mr-2 bg-[#3A3B3C] border-none text-white font-bold w-fit text-sm flex items-center justify-center">
                  ...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileNavBar = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-5">
      <div className="w-full">
        <hr className="border-1 border-gray-700" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-row text-sm">
          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Bài viết
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Giới thiệu
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Bạn bè
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Ảnh
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Videos
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Reels
          </span>

          <span className=" flex justify-center p-3 m-2 h-full items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            Xem thêm
          </span>
        </div>
        <Button className="bg-[#3A3B3C] m-2 p-5 border-none text-white font-bold w-fit text-sm flex items-center justify-center">
          ...
        </Button>
      </div>
    </div>
  );
};

export { ProfileHead, ProfileNavBar };
