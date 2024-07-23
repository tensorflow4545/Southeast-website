import Sidebar from "./Sidebar";
import Head from "./Head";
import { podcast } from "./Data";
import Scrooler from "./Scrooler";

export default function Music(){
    return(
        <>
            <div className="w-full h-max lg:px-[50px] px-[20px] lg:mt-[100px] mt-[100px] pb-[20px] bg-[#FFFFFF]">
              <div className="flex lg:gap-[100px] md:gap-[20px]">
                <div className="basis-1/5"><Sidebar/></div>

                <div className="basis-4/5 lg:ml-[50px] ml-[120px]">
                    <Head/>
                    
                    <div className="mt-[150px]">
                    {podcast.map((Element,index)=>{
                    return(
                    <div key={index} className="mb-[80px]">
                    <div className="text-[25px] text-[#000000] font-Klee font-medium mb-[20px]">{Element.head}</div>
                    <Scrooler data={Element.data}/>
                    </div>
                    )})}
                    </div>

                </div>
              </div>
            </div>
        </>
    )
}