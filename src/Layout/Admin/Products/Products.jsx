import { useState } from "react";
import ProductTable from "../../../Components/Admin/Tables/ProductTable";
import Pagination from "../../../Components/Admin/Pagination/Pagination";
import AddProduct from "./AddProduct";

export default function Products() {

    const [isAddClicked, setIsAddClicked] = useState(false)

    return (
        <>

            <div className="w-full h-full mb-10 mx-auto pt-5 flex flex-col">
                <div className="w-full mb-4 flex gap-5 shrink-0">
                    <button onClick={() => {
                        setIsAddClicked(false)
                    }} className={`w-fit h-fit py-2 px-3 ${!isAddClicked ? 'bg-[#fdfdfd] shadow-custom-soft font-semibold text-[#3d3a3a]' : 'border text-[#3d3a3a]'} transition-all text-sm rounded-lg  flex items-center gap-1`}>
                        <div className={`w-fit h-fit p-[4px] rounded-md ${!isAddClicked ? 'bg-[#6e6c6c]' : 'bg-[white] shadow-md'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill={`${!isAddClicked ? 'white' : '#867b7b'}`} d="M8 9q-.425 0-.712-.288T7 8t.288-.712T8 7h12q.425 0 .713.288T21 8t-.288.713T20 9zm0 4q-.425 0-.712-.288T7 12t.288-.712T8 11h12q.425 0 .713.288T21 12t-.288.713T20 13zm0 4q-.425 0-.712-.288T7 16t.288-.712T8 15h12q.425 0 .713.288T21 16t-.288.713T20 17zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17" /></svg>
                        </div>
                        <h3>List products</h3>
                    </button>
                    <button onClick={() => {
                        setIsAddClicked(true)
                    }} className={`w-fit h-fit py-2 px-3 ${isAddClicked ? 'bg-[#fdfdfd] shadow-custom-soft  font-semibold text-[#3d3a3a]' : 'border text-[#3d3a3a]'} transition-all text-sm rounded-lg flex items-center gap-1`}>
                        <div className={`w-fit h-fit p-[4px] rounded-md ${isAddClicked ? 'bg-[#6e6c6c]' : 'bg-[white] shadow-md'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill={`${isAddClicked ? 'white' : '#867b7b'}`} fill-rule="evenodd" d="M7.345 4.017a42.3 42.3 0 0 1 9.31 0c1.713.192 3.095 1.541 3.296 3.26a40.7 40.7 0 0 1 0 9.446c-.201 1.719-1.583 3.068-3.296 3.26a42.3 42.3 0 0 1-9.31 0c-1.713-.192-3.095-1.541-3.296-3.26a40.7 40.7 0 0 1 0-9.445a3.734 3.734 0 0 1 3.295-3.26M12 7.007a.75.75 0 0 1 .75.75v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1 0-1.5h3.493V7.757a.75.75 0 0 1 .75-.75" clip-rule="evenodd" /></svg>
                        </div>
                        <h3>Add product</h3>
                    </button>
                </div>
                {isAddClicked ?
                    <>
                    <AddProduct />
                    </> :
                    <>
                        <ProductTable />
                        <Pagination />
                    </>
                }
            </div>
        </>
    )
}

