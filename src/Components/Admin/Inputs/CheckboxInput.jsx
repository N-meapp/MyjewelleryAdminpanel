import { useState } from "react"

export default function CheckboxInput({ label, value, setFunction }) {

    const [ isTrue, setIsTrue ] = useState(false)

    return (
        <>
            <div className="shrink-0 h-14 rounded-lg border flex p-2 gap-2 items-center">
                <button className="text-sm rounded-lg w-fit h-full px-4  bg-[white] shrink-0 shadow-custom-soft">
                    {label}
                </button>
                <button onClick={()=>{
                    setIsTrue(!isTrue)
                    console.log(isTrue);
                    
                }} className={`w-6 h-6 shrink-0 rounded-md justify-items-center ${isTrue ? 'bg-[#4b4b4b]' : 'border-dotted border border-[#afaeae]'}`}>
                    {isTrue ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
                         :
                         null
                    }
                </button>
            </div>
        </>
    )
}