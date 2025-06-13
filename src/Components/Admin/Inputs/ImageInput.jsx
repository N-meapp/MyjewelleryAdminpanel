export default function ImageInput({ imageArray, setImageArray }) {

    console.log(imageArray, 'immmageee arrray');

    const handleAddNew = async (imageFile) => {
        console.log(imageFile, 'imagefile');

        const tempArray = [...imageArray]; // create a copy of the current state

        for (let i = 0; i < imageFile.length && i < 4; i++) {
            const element = imageFile[i];
            const imageUrl = URL.createObjectURL(element);
            tempArray[i] = imageUrl;
        }

        console.log(tempArray);
        setImageArray([...tempArray]); // trigger re-render by setting a new array
    }




    return (
        <>
            <div className="w-44">
                <div className="w-44 h-fit relative rounded-lg border flex gap-2 p-2 flex-col">
                    <div className="h-36 relative rounded-lg shrink-0 flex-wrap grid grid-flow-row grid-cols-2 gap-2">

                        {imageArray.map((image, idx) => (
                            <div
                                key={idx}
                                className="w-full h-full aspect-square border-dotted border border-[#afaeae] rounded-lg overflow-hidden relative"
                            >
                                {image ? (
                                    <>
                                        <div className="w-full h-full absolute bg-[#00000077] content-center justify-items-center hover:opacity-100 opacity-0 transition-all">
                                            <div className="w-fit rounded-full h-fit bg-[red] cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48" fill="red">
                                                    <circle cx="24" cy="24" r="20" fill="red" stroke="red" strokeWidth="4" />
                                                    <line x1="18.343" y1="18.343" x2="29.657" y2="29.657" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                                    <line x1="29.657" y1="18.343" x2="18.343" y2="29.657" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>

                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={image}
                                            alt={`uploaded ${idx}`}
                                        />
                                    </>

                                ) : null}
                            </div>
                        ))}


                    </div>
                    <div className="w-full h-8 shadow-custom-soft rounded-lg cursor-pointer bg-[white] relative text-sm content-center text-center flex items-center justify-center gap-1">
                        <input onChange={(e) => {
                            handleAddNew(e.target.files)
                        }} className=" absolute w-full h-full opacity-0 cursor-pointer"
                            multiple
                            type="file">
                        </input>
                        <h3>Add new</h3>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24"><path fill="#6e6c6c" d="m11.558 13.647l-.083.07l-6.928 6.802A3.24 3.24 0 0 0 6.25 21h11.5c.625 0 1.208-.176 1.703-.481l-6.928-6.801l-.093-.078a.75.75 0 0 0-.874.007M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5c0 .627.178 1.213.485 1.71l6.939-6.812l.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117l6.939 6.811A3.24 3.24 0 0 0 21 17.75zm-5.75 4.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4" /></svg>                            </span>
                    </div>
                </div>
                <h3 className="text-[11px] font-light mt-2 text-pretty">Add product images (maximum of 4 images).</h3>
            </div>
        </>
    )
}