export default function SecondarySearch(){

    return(
        <>
          <div className="mt-[245px] w-[65%] mx-auto relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A79F9A" className="absolute left-[18.33px] top-3 size-[16.04px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                <input className="w-full h-[42px] placeholder:tracking-wide border-[0.34px] rounded-lg border-[#8080804b] placeholder:text-[#9B9797] text-sm tracking-wider text-[#9B9797] robo placeholder:font-semibold pl-[40px] pr-[18.33px] py-[11.45px] placeholder:text-[11.45px]" placeholder="Search">
                </input>
            </div>
        </>
    )
}