import { useState } from "react"
import PageNumber from "./PageNumber"

export default function Pagination(){

    const [currentPage,setCurrentPage] = useState(1)

    return(
        <>
         <div className=" h-10 mt-6 mb-14 flex gap-3 justify-center">
            {currentPage>=1 && currentPage<3?
            <div className={`w-8 h-8 rounded-lg border content-center border-[#f8f9fa] justify-items-center select-none`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="rotate-180" viewBox="0 0 24 24"><path fill="#f8f9fa" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
                    </div>
            :
                    <div onClick={()=>{
                        if(currentPage>1){

                            setCurrentPage(currentPage-1)
                        }
                    }} className={`cursor-pointer w-8 h-8 rounded-lg border content-center justify-items-center select-none`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="rotate-180" viewBox="0 0 24 24"><path fill="#4b4848" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
                    </div>
            
            }
                
                {currentPage<=1?
                <>
                <PageNumber num={currentPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <PageNumber num={currentPage+1} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <PageNumber num={currentPage+2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>
                :
                <>
                <PageNumber num={currentPage-1} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <PageNumber num={currentPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <PageNumber num={currentPage+1} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>
                }
                    <div onClick={()=>{
                        setCurrentPage(currentPage+1)
                    }} className={`cursor-pointer w-8 h-8 rounded-lg border content-center justify-items-center select-none`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="" viewBox="0 0 24 24"><path fill="#4b4848" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
                    </div>
                </div>
        </>
    )
}