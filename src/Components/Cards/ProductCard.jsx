import { useState } from "react"

export default function ProductCard({ item }) {

    const [starArray, setStarArray] = useState([1, 2, 3, 4, 5])

    return (
        <>
            <div className="w-[302px] h-auto rounded-[10px] py-[11px] px-[12px] flex flex-col gap-[6px] border-[0.5px] border-[#C8983E]">
                <div className="w-full h-[214px] overflow-hidden">
                    <img className="transition-transform duration-500 ease-in-out hover:scale-110" src={item.image}></img>
                </div>
                <div className="w-full h-[88.37px] relative">
                    <h1 className="text-[16.85px] font-bold bolkit text-[#474141] truncate">{item?.name}</h1>
                    <h1 className="text-[10px] leading-[13.48px] text-[#474141B2] instrument-san">{item.description.slice(0, 100)}<span className="text-[black] cursor-pointer"> ...more</span></h1>
                    <div className="w-full flex absolute bottom-0 items-center justify-between">

                        <div className="w-fit flex">

                            {starArray.map((count) => {

                                if (count <= item.star) {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#C8983E" viewBox="0 0 24 24" stroke-width="1" stroke="C8983E" class="size-[12px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </>
                                    )

                                } else {
                                    return (
                                        <>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#C8983E" class="size-[12px]">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </>
                                    )
                                }

                            })}
                        </div>

                        <h1 className="text-[15.43px] font-bold robo text-[#56433D]">{item.price}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}