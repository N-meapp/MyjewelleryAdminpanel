import UserRow from "./UserRow"

export default function UserTable() {
    return (
        <>


            <div class="relative overflow-x-auto bg-[#ffffff] p-4 rounded-lg h-[70vh] shadow-custom-soft hide-scrollbar">
                <table class="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
                        <tr className="rounded-xl">
                            <th scope="col" class="px-6 py-3">
                                Profile
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                MailId
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                       
                       {[3,5,5,5,5,5,5].map(()=>{
                        return(
                            <>
                            <UserRow />
                            </>
                        )
                       })}

                    </tbody>
                </table>
            </div>

        </>
    )
}