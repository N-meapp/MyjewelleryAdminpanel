export default function Search(){
    return(
        <>
        <div className="w-fit h-fit relative">
            <input className="w-52 h-10 rounded-lg bg-[white] border border-[#d8d5d5] py-2 pr-2 pl-7 text-sm placeholder:text-sm" placeholder="Type here"></input>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[9px] left-1" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1"><circle cx="11" cy="11" r="6"/><path stroke-linecap="round" d="m20 20l-3-3"/></g></svg>
        </div>
        </>
    )
}