"use client";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOndemandVideo, MdFireplace } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";
import { LiaGamepadSolid } from "react-icons/lia";
import { TbGridDots } from "react-icons/tb";
import { BsMessenger, BsBellFill } from "react-icons/bs";

import { Input } from "antd";

const { Search } = Input;

type Props = {
  theme?: "light" | "dark";
};

const Header = ({ theme }: Props) => {
  return (
    <header
      className={`${
        theme == "light" ? "bg-white" : "bg-[#242526]"
      } h-[70px] w-full grid grid-cols-12  items-center border-[#8a8a8a] fixed z-[1000] `}
    >
      <section className="col-span-3 flex items-center ">
        <img
          src="../thumb/facebook.png"
          className="ml-5 mr-3 w-[50px] rounded"
        />
        <span className="w-[300px] h-[50px] rounded-[30px] bg-[#3A3B3C] text-[#728087] flex items-center">
          <BiSearch className="text-[25px] mx-[10px] " />
          <input
            type="text"
            className="w-[220px] bg-transparent h-[30px]  text-[18px]"
            placeholder="Tìm Kiếm Trên Facebook"
          />
        </span>
      </section>

      <nav className="col-span-6 h-full px-[32px] ">
        <div className="mx-auto max-w-[750px] grid grid-cols-5 gap-[20px] h-full items-center">
          <span className=" flex justify-center h-full py-[5px] border-[#0866FF]  border-b-[4px]  items-center cursor-pointer  ">
            <AiTwotoneHome className="text-[30px] text-[#0866FF] " />
          </span>

          <span className=" flex justify-center h-full py-[5px] items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <MdOndemandVideo className="text-[30px]" />
          </span>
          <span className=" flex justify-center h-full py-[5px] items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <MdFireplace className="text-[30px]" />
          </span>
          <span className=" flex justify-center h-full py-[5px] items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <RiGroup2Fill className="text-[30px]" />
          </span>
          <span className=" flex justify-center h-full py-[5px] items-center cursor-pointer hover:max-h-[60px] hover:rounded-[10px] hover:bg-[#3A3B3C]">
            <LiaGamepadSolid className="text-[30px]" />
          </span>
        </div>
      </nav>

      <section className="col-span-3 flex justify-self-end h-full items-center">
        <ul className="flex h-[50px]">
          <li className="flex items-center justify-center rounded-full bg-[#3A3B3C] cursor-pointer w-[50px] mr-[10px] hover:brightness-125">
            {" "}
            <TbGridDots className="text-[30px]" />{" "}
          </li>
          <li className="relative flex items-center justify-center rounded-full bg-[#3A3B3C] cursor-pointer w-[50px] mx-[10px] hover:brightness-125">
            <BsMessenger className="text-[25px]" />
            <span className="bg-[#E41E3F] absolute top-[-5px] right-[-5px] w-[20px] h-[20px] rounded-full flex items-center justify-center">
              9
            </span>
          </li>
          <li className="relative flex items-center justify-center rounded-full bg-[#3A3B3C] cursor-pointer w-[50px] mx-[10px] hover:brightness-125">
            <BsBellFill className="text-[25px]" />
            <span className="bg-[#E41E3F] absolute top-[-5px] right-[-5px] w-[20px] h-[20px] rounded-full flex items-center justify-center">
              6
            </span>
          </li>
          <li className="flex items-center justify-center rounded-full bg-[#3A3B3C] cursor-pointer w-[50px] mx-[10px] mr-5 hover:brightness-125">
            {" "}
            <BiUserCircle className="text-[30px]" />{" "}
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
