import BoardSection from "./BoardSection";

export default function DashBoard() {
    return (
        <>
            <div className="w-full h-full mx-auto pt-10">
                <BoardSection />
                <div className="w-full h-[50vh] mt-10 gap-8 flex">
                    <div className="w-full h-full bg-white shadow-custom-soft rounded-lg"></div>
                    <div className="w-full h-full bg-white shadow-custom-soft rounded-lg"></div>

                </div>
            </div>

        </>
    )
}