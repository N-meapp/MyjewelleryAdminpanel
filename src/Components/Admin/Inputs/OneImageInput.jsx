export default function OneImageInput({ image, setImage }) {


    const handleAddNew = async (imageFile) => {
        console.log(imageFile, 'imagefile');

        const element = imageFile[0];
        const blob = new Blob([element], { type: "image/png" });
        const url = URL.createObjectURL(blob);



        setImage(url);
    }


    return (
        <>
            <div className="w-fit h-14 rounded-lg border flex p-2 relative gap-2">

                <input
                    onChange={(e) => {
                        handleAddNew(e.target.files)
                    }}
                    type="file" className="w-36 h-14 bg-[red] top-0 left-0 absolute rounded-lg opacity-0"></input>
                <div className="w-">

                </div>
                <button className="text-sm rounded-lg w-fit h-full px-4  bg-[white] shadow-custom-soft">
                    <h3>Upload</h3>
                </button>

                <div className="w-14 h-full select-none rounded-lg bg-[#f8f9fa] p-1 text-sm outline-none focus:ring-0 focus:outline-none border-dotted border px-3 border-[#afaeae]" placeholder="Type here..." onChange={(e) => {
                }}>
                    {image ?
                        <img className={`object-cover h-full w-full `} src={image}></img>
                        :
                        null
                    }
                </div>
            </div>
        </>
    )
}