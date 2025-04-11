export default function CategoryTab({ image, isSelected, heading }) {
    return (
        <>
            {isSelected ?
                <div className="w-[234.06px] h-[242.93px] transition-all relative" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}><div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <h1>Explore now</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                    </div></div>
                :
                <div className="w-[198.26px] h-[206.86px] relative" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <h1>Explore now</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                    </div>
                </div>
            }

        </>
    )
}