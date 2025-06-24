import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AdminLogin() {

    const [admin,setAdmin] = useState()
    const [Password,setPassword] = useState()
    const dispatch = useDispatch()


    const handleLogin = () => {
   
    console.log(admin);
    
    dispatch({ type: "SET_ADMIN", payload: { username: admin } });
  };


  return (
    <div className="w-full h-screen content-center relative">
      <img
        className="w-full h-full object-cover absolute top-0 -z-10"
        src="/assets/Images/Admin/adminlogin3.jpg"
      ></img>
      <div className="w-1/3 rounded-xl border border-[#3a3a3a] bg-black/30 backdrop-blur-sm mx-auto justify-items-center px-5 py-9">
        <img className="w-14 h-14 " src="/assets/Images/logo/logo.png"></img>
        <h3 className="text-[#c4c3c3] text-lg font-semibold mt-5 text-center">
          Admin login
        </h3>
        <div className="w-full h-auto mt-8">
          <h3 className="text-sm text-[#aaaaaa]">Username</h3>
          <input onChange={(e)=>{
            setAdmin(e.target.value)
          }}
          value={admin}
           className="w-full h-10 rounded-lg mt-2 px-3 py-1 text-[#b6b4b4] bg-[#ffffff00] border border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-[#3a3a3a]"></input>
        </div>
         <div className="w-full h-auto mt-8">
          <h3 className="text-sm text-[#aaaaaa]">Password</h3>
          <input className="w-full h-10 rounded-lg mt-2 px-3 py-1 text-[#b6b4b4] bg-[#ffffff00] border border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-[#3a3a3a]"></input>
        </div>
        <div onClick={()=>{
            handleLogin()
        }} className="w-full text-center py-2 cursor-pointer bg-[#e8e8e8] mt-8 flex gap-2 rounded-lg items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M12 20a8 8 0 1 0 0-16" opacity="0.5"/><path stroke-linejoin="round" d="M4 12h10m0 0l-3-3m3 3l-3 3"/></g></svg>
        <h3 className="text-sm">Submit</h3>
        </div>
      </div>
    </div>
  );
}
