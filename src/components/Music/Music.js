import Sidebar from "./Sidebar";
import Head from "./Head";
import musicimg from "@/assets/Music/musicimg.png";
import author from "@/assets/Music/author.png";
import { FaRegHeart } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
export default function Music(){
    const music=[
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        },
        {
            img:musicimg,
            author:"Olivia Morris",
            authorimg:author
        }
    ];
    return(
        <>
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[130px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[50px] ml-[120px]">
                    <Head/>
                    <div className="flex flex-col gap-[40px] mt-[180px]">
                    {music.map((element,index)=>{
                    return(
                    <div className="max-w-screen h-[450px] rounded-[20px] flex items-center gap-[40px]">
                       <div className="basis-5/6"><div className="w-full h-[450px] relative">
                         <Image src={element.img} alt="Image" fill></Image>
                         <div className="flex flex-row absolute inset-0 bg-black opacity-50 rounded-[42px]"></div>
                            {/* inner flex author info */}
                            <div className="w-full flex flex-row absolute  px-[30px] py-[20px]">
                            <div className="basis-4/5 flex gap-[30px]">
                            <div className="w-[60px] h-[60px] relative z-[20]"><Image src={element.authorimg} alt="Author Image" fill></Image></div>
                            <div className="text-[32px] text-[#FFFFFF] font-medium font-Klee">{element.author}</div>
                            </div>
                            {/* button */}
                            <div className="flex">
                           
                               <div className="text-[30px] text-[#FFFFFF] font-medium font-Klee w-[182px] h-[42px] border-[1px] border-[#FFFAFA] flex items-center justify-center rounded-[20px]">Pursue</div>
                            
                            </div>
                            </div>
                       </div>
                       </div>
                       <div className="basis-1/6 text-[35px] text-[#828282] flex flex-col gap-[40px] justify-center">
                       <FaRegHeart />
                       <PiTelegramLogo />
                       <FiMessageCircle />
                       </div>
                    </div>
                    )
                    })}
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}