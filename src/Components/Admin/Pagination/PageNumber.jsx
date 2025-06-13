export default function PageNumber({num,currentPage,setCurrentPage}) {
    return (
        <>
            <div onClick={() => {
                setCurrentPage(num)
            }} className={`cursor-pointer w-8 h-8 rounded-lg border text-xs font-semibold text-[#535252]  text-center content-center select-none ${currentPage==num?'bg-[white] shadow-md':''}`}>
                {num}
            </div>
        </>
    )
}