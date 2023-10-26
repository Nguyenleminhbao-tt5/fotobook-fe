'use client'

import IPost from "@/interfaces/post-interface";
import {PiShareFatBold} from 'react-icons/pi';
import {FaRegComment} from 'react-icons/fa';
import {AiOutlineLike} from "react-icons/ai";


// type Props={
//     post: IPost
// }


const Post= ()=>{
    return (
        <div className="bg-[#242526]  mt-[25px] mb-[10px] rounded-[10px] py-[15px] ">
            <header className=" flex items-center px-[20px]">
                <span className="relative">
                    <img src='https://i.pinimg.com/564x/c0/22/3f/c0223fa30e6a4a858c24d996f94ef8cc.jpg' className="h-[50px] w-[50px] rounded-full mr-4"/>
                </span>
                <div className="flex flex-col justify-between">
                    <h1 className="font-semibold text-[18px]">Thầy Đỗ Văn Đức - Ôn luyện 10, 11, 12 môn Toán</h1>
                    <h3>Johnny Bui</h3>
                </div>
            </header>

            <span className="block my-[15px] px-[20px] text-[17px] leading-relaxed">
                Chào mọi người ạ, em sinh năm 2001 đã tốt nghiệp ngành Kỹ thuật máy tính chưa tìm được công việc ạ. Ở trường từ thì em được học các lệnh cơ bản lập trình vi điều khiển , thiết kế mạch với Altium. Trong bài tập của vài môn thì em làm theo trên mạng liên quan đến IT chứ không làm về mạch vì em thấy hứng thú hơn. Giờ muốn học IT thì phải bắt đầu từ đâu ạ và có nên rẽ sang không ạ trong tình hình hiện nay? Hay đi theo hướng nào của điện tử ạ , bắt đầu học ôn tập từ đâu ạ , có thể xin thực tập ở đâu? Em học lực TB rất mong nhận được lời khuyên ạ.
            </span>

            <div className="p-0">
                <img src="./thumb/bkbk.jpg" className="w-full  h-[600px]" />
            </div>

            <footer className="flex flex-col px-[20px] mt-[15px]">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center">
                        <li className="flex items-center"><img src="./thumb/heart.png" className="w-[25px] h-[25px]"/></li>
                        <li className="flex items-center"><img src="./thumb/like.png" className="w-[25px] h-[25px]"/></li>
                        <li className="flex items-center"><img src="./thumb/haha.png" className="w-[30px] h-[30px]"/></li>
                        <li className="ms-2 text-[#757577] text-[20px] font-medium">10k</li>
                    </ul>
                    <span className="text-[#757577] text-[20px]">100k  bình luận</span>
                </div>
                <span className="bg-[#3A3B3C]  h-[1.2px] w-full block mt-[15px] mb-[10px]"></span>
               
                <nav className="grid grid-cols-3 mx-auto gap-2 h-[40px] w-full">
                    <span className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C]">
                        <AiOutlineLike className=" text-[30px] text-[#7f8286]"/>
                        <h3 className='text-[#8d939b] font-semibold ms-[10px] text-[20px]'>Thích</h3>
                    </span>

                    <span className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C]">
                        <FaRegComment className=" text-[30px] text-[#7f8286]"/>
                        <h3 className='text-[#8d939b] font-semibold ms-[10px] text-[20px]'>Bình luận </h3>
                    </span>

                    <span className="flex items-center justify-center hover:rounded-[10px] hover:bg-[#3A3B3C]">
                        <PiShareFatBold className=" text-[30px] text-[#7f8286]"/>
                        <h3 className='text-[#8d939b] font-semibold ms-[10px] text-[20px]'>Chia sẻ</h3>
                    </span>
                    
                </nav>
            </footer>
        </div>
        
    )
}


export default Post;