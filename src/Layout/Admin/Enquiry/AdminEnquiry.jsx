import EqnuiryCard from "../../../Components/Admin/Card/EnquiryCard";
import ImageCarousel from "../../../Components/Admin/Carousels/ImageCarousel";

export default function AdminEnquiry() {
    return (
        <>
            <div className="w-full h-full mb-10 mx-auto pt-5 flex flex-col jamjuree">
                <div className="w-full h-full flex flex-col gap-10">
                    {[5,5,4,4,4,4].map(()=>{
                        return(
                            <>
                            <EqnuiryCard />
                            </>
                        )
                    })}
                   
                </div>
            </div>
        </>
    )
}