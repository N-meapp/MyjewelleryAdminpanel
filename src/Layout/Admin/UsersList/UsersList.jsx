import { useState } from "react";
import ProductTable from "../../../Components/Admin/Tables/ProductTable";
import Pagination from "../../../Components/Admin/Pagination/Pagination";
import AddProduct from "../Products/AddProduct";
import UserTable from "../../../Components/Admin/Tables/UserTabe";

export default function UsersList() {

    const [isAddClicked, setIsAddClicked] = useState(false)

    return (
        <>

            <div className="w-full h-full mb-10 mx-auto pt-5 flex flex-col">
                <div className="w-full mb-4 flex gap-5 shrink-0">
                    <button onClick={() => {
                        setIsAddClicked(false)
                    }} className={`w-fit h-fit py-2 px-3 ${!isAddClicked ? 'bg-[#fdfdfd] shadow-custom-soft font-semibold text-[#3d3a3a]' : 'border text-[#3d3a3a]'} transition-all text-sm rounded-lg  flex items-center gap-1`}>
                        <div className={`w-fit h-fit p-[4px] rounded-md ${!isAddClicked ? 'bg-[#6e6c6c]' : 'bg-[white] shadow-md'}`}>
<svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.08 15.296c-1.218.738-4.412 2.243-2.466 4.126c.95.92 2.009 1.578 3.34 1.578h7.593c1.33 0 2.389-.658 3.34-1.578c1.945-1.883-1.25-3.389-2.468-4.126a9.06 9.06 0 0 0-9.338 0M13.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M17 5h5m-5 3h5m-2 3h2" color={`${isAddClicked ?'#867b7b':'white' }`}/></svg>
</div>
                        <h3>List users</h3>
                    </button>
                    <button onClick={() => {
                        setIsAddClicked(true)
                    }} className={`w-fit h-fit py-2 px-3 ${isAddClicked ? 'bg-[#fdfdfd] shadow-custom-soft  font-semibold text-[#3d3a3a]' : 'border text-[#3d3a3a]'} transition-all text-sm rounded-lg flex items-center gap-1`}>
                        <div className={`w-fit h-fit p-[4px] rounded-md ${isAddClicked ? 'bg-[#6e6c6c]' : 'bg-[white] shadow-md'}`}>
<svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill={`${isAddClicked ? 'white' : '#867b7b'}`} fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>                        </div>
                        <h3>Add user</h3>
                    </button>
                </div>
                {isAddClicked ?
                    <>
                    <AddProduct />
                    </> :
                    <>
                        <UserTable />
                        <Pagination />
                    </>
                }
            </div>
        </>
    )
}

