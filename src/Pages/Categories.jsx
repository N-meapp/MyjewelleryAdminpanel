// import logo from ''
// import profile from '../assets/Images/profile/profile-1.jpg'


export default function Categories(){
    return (
        <>
        <div className="w-[80%] mx-auto h-[60px] mt-[69px] flex justify-between" 
        c>
            <img className="h-fit" src='/assets/Images/logo/image 94.png' ></img>
            <div className='w-[60px] rounded-full'>
            <img className="w-full h-full rounded-full object-cover" src='/assets/Images/profile/profile-1.jpg' ></img>
            </div>
        </div>
        <div className='mt-[101px] h-[341px] bg-[red] rounded-[20px]'  style={{
    backgroundImage: 'url("/assets/Images/offers/offer-four.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>

        </div>
        </>
    )
}


236
