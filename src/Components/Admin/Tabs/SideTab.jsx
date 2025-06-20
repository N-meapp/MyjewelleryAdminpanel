import { Tab } from "@material-tailwind/react";
import { useEffect } from "react";

export default function SideTab({
  selectedTab,
  tab,
  setSelectedTab,
  i,
  isShrink,
}) {
  return (
    <>
      <div
        onClick={() => {
          setSelectedTab(tab);
        }}
        className={`${
          isShrink ? "w-12" : "w-[90%]"
        } overflow-hidden cursor-pointer flex mx-auto h-12 text-sm text-center items-center gap-4 p-3 transition-all rounded-lg ${
          selectedTab == tab
            ? "bg-[white] shadow-custom-soft font-semibold"
            : "font-light"
        }`}
      >
        <div
          className={`w-fit h-fit p-[5px] rounded-md  ${
            selectedTab == tab ? "bg-[#6e6c6c]" : "bg-[white] shadow-md"
          }`}
        >
          {i == 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M11 2v20c-5.1-.5-9-4.8-9-10s3.9-9.5 9-10m2 0v9h9c-.5-4.8-4.2-8.5-9-9m0 11v9c4.7-.5 8.5-4.2 9-9z"
              />
            </svg>
          ) : i == 2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M7.425 9.475L11.15 3.4q.15-.25.375-.363T12 2.925t.475.113t.375.362l3.725 6.075q.15.25.15.525t-.125.5t-.35.363t-.525.137h-7.45q-.3 0-.525-.137T7.4 10.5t-.125-.5t.15-.525M17.5 22q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 20.5v-6q0-.425.288-.712T4 13.5h6q.425 0 .713.288T11 14.5v6q0 .425-.288.713T10 21.5H4q-.425 0-.712-.288T3 20.5"
              />
            </svg>
          ) : i == 3 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"
              />
              <path
                fill="#867b7b"
                d="M4.5 17.859C5.343 18 6.462 18 8 18h8c1.538 0 2.657 0 3.5-.141V18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18zm0-11.718C5.343 6 6.462 6 8 6h8c1.538 0 2.657 0 3.5.141V6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6z"
                opacity="0.5"
              />
            </svg>
          ) : i == 5 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 16 16"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2.4 7.506c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0M14.002 12h-1.59a3 3 0 0 0-.04-.29a6.5 6.5 0 0 0-1.167-2.603a3 3 0 0 1 3.633 1.911c.18.522-.283.982-.836.982M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
              />
            </svg>
          ) : i == 4 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M14.6 8.075q0-1.075-.712-1.725T12 5.7q-.725 0-1.312.313t-1.013.912q-.4.575-1.088.663T7.4 7.225q-.35-.325-.387-.8t.237-.9q.8-1.2 2.038-1.862T12 3q2.425 0 3.938 1.375t1.512 3.6q0 1.125-.475 2.025t-1.75 2.125q-.925.875-1.25 1.363T13.55 14.6q-.1.6-.513 1t-.987.4t-.987-.387t-.413-.963q0-.975.425-1.787T12.5 11.15q1.275-1.125 1.688-1.737t.412-1.338M12 22q-.825 0-1.412-.587T10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22"
              />
            </svg>
          ) : i == 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${selectedTab == tab ? "white" : "#867b7b"}`}
                d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"
              />
            </svg>
          ) : null}
        </div>
        <h3>{tab}</h3>
      </div>
    </>
  );
}
