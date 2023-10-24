'use client'
import {BiSearch} from "react-icons/bi"
import { Input } from 'antd';

const {Search} = Input;

type Props = {
    theme?: "light" | "dark";
}

const Header = ({theme}: Props)=>{
    return (
        <header className={`${theme == "light" ? "bg-white": "bg-[#242526]"} h-[70px] w-full grid grid-cols-12  items-center border-[#8a8a8a] `}>
            <section className="col-span-3 flex items-center ">
                <img src="./thumb/facebook.png" className="ml-5 mr-3 w-[50px] rounded" />
                <span className="w-[300px] h-[50px] rounded-[30px] bg-[#3A3B3C] text-[#728087] flex items-center">
                    <BiSearch className= "text-[25px] mx-[10px] "/>
                    <input type="text" className="w-[220px] bg-transparent h-[30px]  text-[18px]" placeholder="Tìm Kiếm Trên Facebook"/>
                </span>
            </section>

            <nav className="col-span-6">
                navigate
            </nav>

            <section className="col-span-3">
                header-right
            </section>
        </header>
    )
}


export default Header;