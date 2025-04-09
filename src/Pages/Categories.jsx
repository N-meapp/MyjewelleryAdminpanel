import logo from '../assets/Images/logo/image 94.png'
import profile from '../assets/Images/profile/profile-1.jpg'


export default function Categories(){
    return (
        <>
        <div className="w-[80%] mx-auto h-[60px] mt-[69px] flex justify-between" 
        c>
            <img className="h-fit" src={logo} ></img>
            <div className='w-[60px] rounded-full'>
            <img className="w-full h-full rounded-full object-cover" src={profile} ></img>
            </div>
        </div>
        <div className='mt-[101px] h-[341px] bg-[red] rounded-[20px]'>

        </div>
        </>
    )
}


236
