export default function NumberInput({label,value,setFunction}){
    return(
        <>
        <div className="w-full h-14 rounded-lg border flex p-2 gap-2">
        <button className="text-sm rounded-lg w-fit h-full px-4  bg-[white] shadow-custom-soft shrink-0">
            {label}
        </button>
        <input className="w-full h-full select-none rounded-lg bg-[#f8f9fa] text-sm outline-none focus:ring-0 focus:outline-none border-dotted border px-3 border-[#afaeae]" placeholder="Type here..." value={value} type="number" onChange={(e)=>{
            setFunction(e.target.value)
        }}></input>
        </div>
        </>
    )
}