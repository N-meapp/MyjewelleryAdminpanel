export default function DashboardStats({title,icon,rate}){
    return (
        <>
        <div className="w-full h-20 bg-[white] shadow-custom-soft rounded-lg p-3 content-center flex justify-between items-center">
            <div>
            <h3 className="text-sm font-light text-[#747373]">{title}</h3>
            <h3 className="text-2xl font-bold text-[#4d4c4c]">{rate}</h3>
            </div>
            <div className="w-10 h-10 rounded-md ">
                {/* bg-gradient-to-r from-[#ecc880] to-[#805221] */}
                <img src={icon} className="w-10"></img>
            </div>
        </div>
        </>
    )
}