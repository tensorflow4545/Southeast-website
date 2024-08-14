import Image from "next/image";
import Logo from "@/assets/Homepage/logo1.png";
import { FaRegBell,FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
export default function Auth(){
    return(
        <>
            <div className="w-full h-max lg:px-[50px] md:px-[30px] px-[20px] lg:py-[20px] md:py-[20px] py-[20px] bg-[#FFFFFF] z-[20] fixed">

            <div className="flex flex-row">
              <div className="basis-1/2 flex flex-row">
               <Link href={"/"}><div className="lg:w-[295px] md:w-[200px] w-[150px] lg:h-[103px] md:h-[90px] h-[60px] relative">
                <Image src={Logo} alt="Logo Image" fill></Image>
               </div></Link>
               <Link href={"/"}><div className="lg:text-[22px] md:text-[20px] text-[18px] text-[#000000] font-Klee font-semibold lg:mt-[30px] md:mt-[20px] sm:mt-[20px] ml-[10px] lg:grid hidden">Home</div></Link>
              </div>
              <div className="basis-1/2">
               <div className="flex items-center gap-[40px] lg:mt-[20px] md:mt-[15px]">
               <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 lg:w-[451px] text-center md:-w-[200px] h-[54px] rounded-[15px] border border-[#646464] absolute lg:grid hidden"
                    />
                    <FaSearch className="relative mt-[20px] lg:ml-[400px] md:ml-[200px] lg:grid hidden"/>
                 </div>
                 <FaRegBell className="lg:size-[20px] size-[15px] lg:mt-[20px] md:mt-[10px] ml-[20px]"/>
                 <div className="flex flex-row">
                    <div className="lg:w-[70px] md:w-[60px] w-[50px] lg:h-[70px] md:h-[60px] h-[50px] rounded-full bg-gray-300"></div>
                    <IoIosArrowDown className="lg:mt-[25px] md:mt-[20px] mt-[15px] lg:ml-[20px] md:ml-[15px] ml-[5px]"/>
                 </div>               
               </div>
              </div>
            </div>
            
            </div>
        </>
    )
}