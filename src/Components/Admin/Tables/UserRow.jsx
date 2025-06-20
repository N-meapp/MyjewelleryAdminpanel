import { useState } from "react";
import ProductModal from "../Modal/ProductModal";

export default function UserRow() {
  const [open, setOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <>
      <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-sm`}>
        <td scope="row" class="px-6 py-4">
          <img
            className="w-16 h-16 rounded-full"
            src="/assets/Images/ProductDetails/pr1.png"
          ></img>
        </td>
        <th
          scope="row"
          class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td class="px-6 py-4">Silver</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4 text-xs text-center">
          {isBlocked ? (
            <h3 className=" p-1 bg-[#ff8686d6] rounded-full text-[10px] text-[#ffffff] font-semibold">
              Inactive
            </h3>
          ) : (
            <h3 className=" p-1 bg-[#a5d7a5d6] rounded-full text-[10px] text-[#000000] font-semibold">
              Active
            </h3>
          )}
        </td>
        <td class="px-6 py-4 ">
          <div className="flex h-full w-full gap-5">
            {isBlocked ? (
              <button
                onClick={() => {
                  setIsBlocked(false);
                }}
                className="w-fit py-2 px-3 flex gap-1 border border-[#8cc28c] text-black rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="green"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.636 18.364A9 9 0 1 0 18.364 5.636A9 9 0 0 0 5.636 18.364m2.171-.757a7.001 7.001 0 0 0 9.8-9.8l-2.779 2.779a1 1 0 0 1-1.414-1.414l2.778-2.779a7.002 7.002 0 0 0-9.799 9.8l2.779-2.779a1 1 0 0 1 1.414 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
                <h3 className="text-xs">Unblock</h3>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsBlocked(true);
                }}
                className="w-fit py-2 px-3 flex gap-1 border border-[#f3afaf] text-black rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="red" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M5 19L19 5" />
                  </g>
                </svg>
                <h3 className="text-xs">Block</h3>
              </button>
            )}
          </div>
        </td>
      </tr>
      <ProductModal open={open} setOpen={setOpen} />
    </>
  );
}
