import { useState } from "react"

export default function Dropdown({ label, dropdownArray,selectedElement,setSelectedElement }) {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className="w-full h-14 rounded-lg border flex p-2 gap-2 relative">
                <button className="text-sm rounded-lg w-fit h-full px-4  bg-[white] shadow-custom-soft">
                    {label}
                </button>
                <div onClick={() => {
                    setIsOpen(!isOpen)
                }} className="w-full h-full  select-none rounded-lg items-center bg-[#f8f9fa] text-sm outline-none focus:ring-0 focus:outline-none border-dotted border cursor-pointer px-3 content-center flex overflow-hidden  border-[#afaeae]">
                    <h3 className={`w-full  ${selectedElement=='Select'?'text-[#c1c1bf]':'text-[black]'}`}>{selectedElement}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`transition-all duration-300 ${isOpen?'rotate-180':'rotate-0'}`} viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
                    <div className={`w-fit shadow-md rounded-lg top-11 z-10 absolute transition-all right-3 bg-white overflow-hidden flex flex-col ${isOpen ? 'h-fit p-2' : 'h-0 p-0'}`}>
                        {dropdownArray.map((element) => {
                            return (
                                <>
                                    <button onClick={()=>{
                                        setSelectedElement(element)
                                    }} className=" py-2 px-2 text-xs">{element}</button>
                                    <hr></hr>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>        </>
    )
}