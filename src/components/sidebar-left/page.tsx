"use client";
import ItemSidebar from "../common/item-sidebar/page";

const SidebarLeft = () => {
  return (
    <div className="col-span-3 ps-3 mt-[15px] ">
      <nav className="">
        <ItemSidebar
          isGroup={true}
          source="../thumb/user.png"
          title="Nguyễn Lê Minh Bảo"
          size="large"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/teamwork.png"
          title="Bạn bè"
          size="small"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/save-instagram.png"
          title="Đã lưu"
          size="small"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/group.png"
          title="Nhóm"
          size="small"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/marketplace.png"
          title="Marketplace"
          size="small"
        />
      </nav>
      <span className="bg-[#3A3B3C] mx-2 h-[1.2px] w-full block"></span>
      <h1 className="text-[#7f8286] ps-2 font-bold mt-[10px] text-[21px]">
        Lối tắt của bạn
      </h1>
      <ul className="">
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K20"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K21"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K22"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K23"
        />
        <ItemSidebar
          isGroup={true}
          source="../thumb/bkbk.jpg"
          title="HCMUT K24"
        />
      </ul>
    </div>
  );
};

export default SidebarLeft;
