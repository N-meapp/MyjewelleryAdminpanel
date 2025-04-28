import React from 'react'

const ProfileView = () => {
    return (
        <>
            <img className=' rounded-full w-[206px] h-[206px]' src='/public/assets/Images/MyAccount/profile.png' />
            <p className='text-[24px] text-[#000] poppins font-[600] mt-3'>Name : Ahana.K</p>
            <p className='text-[15px] text-[#000] poppins'>Ms</p>
            <div className='flex gap-1'>
                <img className='w-[20px] h-[20px]' src='/public/assets/Images/MyAccount/flag.png' />
                <p className='text-[15px] poppins'>India</p>
            </div>
        </>
    )
}

export default ProfileView