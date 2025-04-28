export default function CategoryTab({ image, isSelected, heading }) {
    return (
        <>
            {isSelected ?

          <div
            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
                    <div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <h1>Explore now</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                    </div></div>
                :
                
                <div className="w-[198.26px] h-[206.86px] relative transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="w-full absolute h-[35.76px] bg-[#88704F] bottom-2 flex justify-around items-center text-white">
                        <h1 className="bolkit text-[12px]">Explore now</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                    </div>
                    <p className="text-[24px] text-[#ffffff] absolute top-6 left-1/2 -translate-x-1/2 text-center bolkit">
                        {heading}
                    </p>

                </div>
            }

        </>
    )
}