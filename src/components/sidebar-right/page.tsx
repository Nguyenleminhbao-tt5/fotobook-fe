"use client";

import ItemSidebar from "../common/item-sidebar/page";
import AddFriend from "../common/add-friend/page";
import IUser from "@/interfaces/user-interface";

const SidebarRight = () => {
  const user: IUser = {
    firstName: "Kha",
    lastName: "Bui",
    avatar: "../thumb/user.png",
  };

  return (
    <div className="col-span-3  mt-[15px] sticky top-0">
      <div className="flex justify-between w-full mt-[10px] items-center">
        <h1 className="text-[#7f8286] ps-2 font-bold  text-[21px]">
          Lời mời kết bạn
        </h1>
        <a href="" className="text-[#2176FF] pe-[30px]">
          Xem tất cả
        </a>
      </div>

      <ul className="">
        <AddFriend user={user} />
      </ul>
      <span className="bg-[#3A3B3C] mx-2 h-[2px] w-full block"></span>

      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Sinh nhật
      </h1>

      <div className="mt-[10px] mb-[30px] ms-[15px] flex items-center">
        <img src="./thumb/gift.png" className="w-[45px] h-[45px]" />
        <span className="text-[18px] ms-3 mt-2">
          Hôm này là sinh nhật của
          <a href="" className="font-bold">
            {`${user.firstName} ${user.lastName}`}
          </a>
        </span>
      </div>

      <span className="bg-[#3A3B3C] mx-2 h-[2px] w-full block"></span>
      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Người liên hệ
      </h1>
      <ul className="mt-[15px] ">
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
        />
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
          isStory={true}
        />
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
        />
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
        />
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
        />
        <ItemSidebar
          isGroup={false}
          source="./thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="small"
        />
      </ul>
    </div>
  );
};

export default SidebarRight;
