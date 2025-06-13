import Search from "../../../Components/Admin/Inputs/Search";

export default function SearchBar({ isShrink, setIsShrink }) {



    return (
        <>
            <div className="w-full h-20 items-center flex justify-between shrink-0">
                <div onClick={()=>{
                    setIsShrink(!isShrink)
                }} className="w-8 h-8 p-1 rounded-md bg-[#696969] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full transition-all duration-150 ${isShrink?'rotate-180':'rotate-0'}`} viewBox="0 0 12 24"><path fill="white" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>                </div>
                <div className="flex gap-4 items-center">
                    <Search />
                    <div className="w-10 h-10 rounded-full bg-[black]">
                        <img className="object-contain" src="/assets/Images/MyAccount/profile.png"></img>
                    </div>
                </div>
            </div>
        </>
    )
}