'use client'
import {BsFacebook} from "react-icons/bs";
import { Input } from 'antd';

const {Search} = Input;

type Props = {
    theme?: "light" | "dark";
}

const Header = ({theme}: Props)=>{
    return (
        <header className={`${theme == "light" ? "bg-white": "bg-[#242526]"} h-[70px] w-full grid grid-cols-12  items-center `}>
            <section className="col-span-3 flex items-center ">
                <BsFacebook className="text-[50px] ml-5 mr-3 text-[#0866FF]"/>
                <Search/>
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