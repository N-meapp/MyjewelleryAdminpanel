<button
className="relative overflow-hidden w-[140px] h-[42px] bg-white border border-[#ccc4b8] text-[#56433d] text-[13px] font-[550] rounded-[10px] px-3 py-2 flex items-center justify-center hover:bg-gray-100 shadow"
>
<div
   onClick={() => setModalOpen(true)}
    className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ease-in
    ${showTryItOn ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256"><path fill="#56433d" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36" /></svg>

    <span>View similar</span>
</div>

<div
    className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500 ease-in-out
    ${showTryItOn ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g fill="none" stroke="#56433d" stroke-width="1.5"><circle cx="12" cy="13" r="3" /><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" /><path stroke-linecap="round" d="M19 10h-1" /></g></svg>

    <span>Try it on</span>
</div>
</button>