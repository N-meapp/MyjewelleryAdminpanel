import ImageCarousel from "../Carousels/ImageCarousel";

export default function EqnuiryCard() {
    return (
        <>
            <div className="h-auto w-auto gap-4 rounded-lg border flex p-2">
                <div className="w-fit h-fit flex gap-8">
                    <div className="w-52 ">
                        <ImageCarousel />
                    </div>
                    <div>
                        <h3 className="font-semibold" >Jewellery</h3>
                        <div className='flex gap-2'>
                            <div className='flex'>
                                <img className='w-8 h-8' src="/public/assets/Images/ProductDetails/gold.gif" alt="Computer man" />
                                <p className='text-xs text-[#474141] poppins md:mt-2 mt-1'>{44.5} Karat</p>
                            </div>
                            <div className='flex'>
                                <img className='w-8 h-8' src="/public/assets/Images/ProductDetails/diamond.gif" alt="Computer man" />
                                <p className='text-xs text-[#474141] poppins md:mt-2 mt-1'>0.226 ct</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-light robo">₹ 34394</h3>
                        <button className="  p-1 bg-[white] items-center shadow-lg text-sm font-semibold text-[#1f6ea3] flex rounded-lg mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><defs><mask id="letsIconsViewDuotoneLine0"><g fill="none" stroke-width="1.2"><circle cx="12" cy="12" r="3.4" stroke="#fff" /><path stroke="#c0c0c0" stroke-opacity="0.25" d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934Z" /></g></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsViewDuotoneLine0)" /></svg>
                            <h3 className="mr-1">View</h3>
                        </button>
                    </div>
                </div>
                <hr className="w-28 rotate-90 self-center"></hr>
                <div className="w-fit h-fit flex items-center gap-8">
                    <div className="w-fit h-[inherit] flex flex-col gap-2 content-center justify-center">
                        <div className="flex gap-3 items-center">
                            <div className="w-12 h-12 rounded-full">
                                <img className="w-full h-full object-cover" src="/public/assets/Images/MyAccount/profile.png"></img>
                            </div>
                            <h1 className="font-semibold">Teresa Marc</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rotate-90" viewBox="0 0 20 20"><path fill="#000" d="m12.06 6l-.21-.2c-.52-.54-.43-.79.08-1.3l2.72-2.75c.81-.82.96-1.21 1.73-.48l.21.2zm.53.45l4.4-4.4c.7.94 2.34 3.47 1.53 5.34c-.73 1.67-1.09 1.75-2 3c-1.85 2.11-4.18 4.37-6 6.07c-1.26.91-1.31 1.33-3 2c-1.8.71-4.4-.89-5.38-1.56l4.4-4.4l1.18 1.62c.34.46 1.2-.06 1.8-.66c1.04-1.05 3.18-3.18 4-4.07c.59-.59 1.12-1.45.66-1.8zM1.57 16.5l-.21-.21c-.68-.74-.29-.9.52-1.7l2.74-2.72c.51-.49.75-.6 1.27-.11l.2.21z" /></svg>                                <h3 className=" text-sm font-semibold p-2 bg-[white] border rounded-lg text-[#2e2e2e] shadow-lg">99442345523</h3>
                        </div>
                    </div>
                    <div className="w-fit h-32 flex flex-col gap-2 overflow-hidden">
                        <h3 className="text-sm font-semibold">Message :</h3>
                        <div className="w-full p-3 rounded-lg border bg-white h-32 overflow-y-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typeset
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}