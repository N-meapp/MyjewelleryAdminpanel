export default function SlidingButton({handleScrolling}) {
    return (
      <div className="w-fit flex gap-[15px] items-center">
        <div onClick={()=>{
            handleScrolling('left')
        }} className="w-[51px] h-[51px] rounded-full border-[1px] border-[#BDAE91] content-center justify-items-center cursor-pointer select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#C8983E"
          className="scale-x-[-1]"
        >
          <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76" />
        </svg>
        </div>
        <div onClick={()=>{
            handleScrolling('right')
        }} className="w-[51px] h-[51px] rounded-full border-[1px] border-[#BDAE91] content-center justify-items-center cursor-pointer select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#C8983E"
          className=""
        >
          <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76" />
        </svg>
        </div>
       
      </div>
    );
  }
  