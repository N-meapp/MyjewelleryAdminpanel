export default function CategoryAboutSection({details}){
    console.log(details);
    
    return(
        <>
        <div className="h-[536px] w-[59%] mx-auto mt-[131px] px-[66px] py-[28px] flex gap-[24px]">
                <div className="h-full w-full mx-auto content-center">
                    <div className="h-auto w-full">
                        <h1 className="text-[30px] bolkit h-[46px] font-bold">{details.heading}</h1>
                        <h1 className="text-[15px] text-[#6F6565] poppins">{details.description}</h1>
                        <button className="bg-[#C5A984] w-[153px] h-[43px] rounded-lg text-[15px] mt-[24px] font-semibold text-[#000000] poppins">Explore</button>

                    </div>
                </div>
                <img className="w-auto h-auto" src={details.video}></img>
            </div>
        </>
    )
}