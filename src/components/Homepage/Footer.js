export default function Footer(){
    return(
        <>
            <div className="w-full h-max lg:px-[100px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[40px] py-[20px] bg-[#000000]">
             <div className="w-full h-[1px] bg-white mb-[40px]"></div>
             
             {/* grid */}
             <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2">
             {/* child */}
             <div className="pr-[50px]">
                <p className="text-[40px] text-white font-Montserrat font-medium mb-[20px]">About us</p>
                <p className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Read more</p>
             </div>
             {/* child */}
             <div className="lg:flex lg:flex-row">
              <div className="basis-1/3">
                <ul>
                   <p className="text-[30px] text-[#FFFFFF] font-Klee pb-[20px]">Quick links</p> 
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[10px]">Dive in</li>
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[10px]">Music</li>
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[10px]">Artistry</li>
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[10px]">Podcasts</li>
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee pb-[10px]">Notes</li>
                   <li className="lg:text-[22px] md:text-[20px] text-[18px] text-[#646464] text-justify font-Klee">DBooks</li>
                </ul>
              </div>
              <div className="basis-2/3">
              <p className="text-[30px] text-white font-Montserrat font-medium mb-[20px]">Have a query ?</p>
              <div className="flex">
              <input placeholder="Email Us" for="email" class="lg:w-[344px] md:w-[300px] h-[49px] px-[15px] mb-2 text-[20px] font-Montserrat bg-white text-[#646464] dark:text-white flex items-center justify-start rounded-md"/>
              {/* button */}
              <button className="lg:w-[116px] md:w-[100px] w-[100px] h-[49px] bg-[#C6AB64] text-white text-[20px] flex items-center justify-center ml-[10px] rounded-lg shadow-md hover:shadow-lg font-Montserrat">
              Send
                        
              </button>
              </div>
              </div>
             </div>
             </div>

             <p className="lg:text-[20px] md:text-[18px] text-[16px] text-[#646464] text-center font-Klee mt-[30px] mb-[10px]">© Southeast 2023.</p>

            </div>
        </>
    )
}