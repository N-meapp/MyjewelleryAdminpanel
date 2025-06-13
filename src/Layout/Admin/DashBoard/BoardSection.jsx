import DashboardStats from "../../../Components/Admin/Tabs/DashboardStats";

export default function BoardSection() {
    return (
        <>
                <div className="w-full h-auto flex gap-9">
                    <DashboardStats title={'Total products'} icon={'/assets/Images/Admin/total-products.png'} rate={500} />
                    <DashboardStats title={'Total categories'} icon={'/assets/Images/Admin/total-categories.png'} rate={53} />
                    <DashboardStats title={'Total enquiries'} icon={'/assets/Images/Admin/total-enquiries.png'} rate={7900} />
                    <DashboardStats title={'Total users'} icon={'/assets/Images/Admin/total-users.png'} rate={346} />
                </div>
        </>
    )
}