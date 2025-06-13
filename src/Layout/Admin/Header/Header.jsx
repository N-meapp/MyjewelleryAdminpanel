import { useState } from "react"

export default function Header() {

    const [desktopHeader, setDesktopHeader] = useState()
    const [mobileHeader, setMobileHeader] = useState()
    const [sliders, setSliders] = useState([null, null, null])

    const addHeader = (view, files) => {
        console.log(files, 'filess');


        const element = files[0];
        const imageUrl = URL.createObjectURL(element);

        if (view == 'mobile') {
            setMobileHeader(imageUrl)
        } else if (view == 'desktop') {
            setDesktopHeader(imageUrl)
        } else {
            const tempArray = [...sliders];

            for (let i = 0; i < 3; i++) {

                const element = files[i];
                const imageUrl = URL.createObjectURL(element);
                tempArray[i] = imageUrl;
                console.log(imageUrl, 'imageurlll');

            }

            setSliders(tempArray)
        }

    }



    return (
        <>
            <div className="w-[80%] h-full mb-20 mt-20 mx-auto py-14 flex flex-col relative">
                <button className="py-3 px-4 rounded-lg shadow-custom-soft bg-[#ffffff] w-fit flex items-center gap-2 absolute -top-2 left-0">
                    <input className="w-full h-full absolute top-0 left-0 rounded-md opacity-0 cursor-pointer"
                        onChange={(e) => {
                            addHeader('desktop', e.target.files)
                        }} type="file"></input>
                    <div className={`w-fit h-fit p-[4px] rounded-md bg-[white] shadow-md cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#6e6c6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#6e6c6c" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5" /><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" /></path></g></svg>                                </div>
                    <h3 className="text-sm"> Desktop view Header</h3>

                </button>
                <button className="py-3 px-4 rounded-lg shadow-custom-soft bg-[#ffffff] w-fit flex items-center gap-2 absolute -top-2 right-0">
                    <input className="w-full h-full absolute top-0 left-0 rounded-md opacity-0 cursor-pointer"
                        onChange={(e) => {
                            addHeader('mobile', e.target.files)
                        }} type="file"></input>
                    <div className={`w-fit h-fit p-[4px] rounded-md bg-[white] shadow-md cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#6e6c6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#6e6c6c" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5" /><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" /></path></g></svg>                                </div>
                    <h3 className="text-sm"> Mobile view Header</h3>

                </button>
                <button className="py-3 px-4 rounded-lg shadow-custom-soft bg-[#ffffff] w-fit flex items-center gap-2 absolute -bottom-2 left-0">
                    <input className="w-full h-full absolute top-0 left-0 rounded-md opacity-0 cursor-pointer"
                        multiple
                        onChange={(e) => {
                            addHeader('sliders', e.target.files)
                        }} type="file"></input>
                    <div className={`w-fit h-fit p-[4px] rounded-md bg-[white] shadow-md cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#6e6c6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#6e6c6c" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5" /><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" /></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" /></path></g></svg>                                </div>
                    <h3 className="text-sm"> Desktop view sliders</h3>

                </button>
                <div className=" w-full h-full mx-auto flex gap-6">
                    <div className="w-[65%] h-full shrink-0 flex flex-col gap-6">
                                        <div className={`w-full h-full border border-[#d8d5d5] border-dotted content-center justify-items-center bg-[white] rounded-lg overflow-hidden bg-[url(${desktopHeader})] bg-cover bg-center`}
                                         style={{
                                                backgroundImage: `url(${desktopHeader})`,

                                        }}>
                            {/* {desktopHeader ?
                                <img className="w-full h-full object-cover" src={desktopHeader}></img>
                                :
                                null
                            } */}
                        </div>
                        <div className="w-full h-full flex gap-2">
                            {sliders.map((img) => {
                                return (
                                    <>
                                        <div className={`w-full h-full border border-[#d8d5d5] border-dotted content-center justify-items-center bg-[white] rounded-lg overflow-hidden bg-[url(${img})] bg-cover bg-center`} 
                                        style={{
                                                backgroundImage: `url(${img})`,

                                        }}>
                                         
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                                        <div className={`w-full h-full border border-[#d8d5d5] border-dotted content-center justify-items-center bg-[white] rounded-lg overflow-hidden bg-[url(${mobileHeader})] bg-cover bg-center`}
                                      style={{
                                                backgroundImage: `url(${mobileHeader})`,

                                        }}>
                       
                    </div>
                </div>

            </div>

        </>
    )
}


