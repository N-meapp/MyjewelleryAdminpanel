import ModelViewer from "../Ar3dModal/ModalViewer"

export default function ThreeDInput({threeDModel,setThreeModel}){


  const handleAddNew = async (model) => {
    console.log(model,'modell');

    const tempArray = [...imageArray]; // create a copy of the current state

    for (let i = 0; i < imageFile.length && i < 4; i++) {
        const element = imageFile[i];
        const imageUrl = URL.createObjectURL(element);
        tempArray[i] = imageUrl;
    }

    console.log(tempArray);
    setImageArray([...tempArray]); // trigger re-render by setting a new array
}


    

    return(
        <>
        <div className="w-44">
        <div className="w-44 h-fit relative rounded-lg border flex gap-2 p-2 flex-col">
                    <div className="h-36 relative rounded-lg gap-2 border-dotted border border-[#afaeae]">
        
        <ModelViewer src={'/assets/Images/3DAR/necklace_b.glb'} />

                    </div>
                    <div className="flex flex-col gap-2">
                    <div className="w-full h-8 shadow-custom-soft rounded-lg cursor-pointer bg-[white] relative text-sm content-center text-center flex items-center justify-center gap-1">
                        <input onChange={(e) => {
                            handleAddNew(e.target.files)
                        }} className=" absolute w-full h-full opacity-0 cursor-pointer"
                        multiple
                        type="file">
                        </input>
                        <h3>Add</h3>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#6e6c6c" fill-rule="evenodd" d="m9.675 19.34l-3-2.144c-.821-.586-1.232-.88-1.453-1.31S5 14.95 5 13.942v-3.883c0-.322 0-.592.007-.825L11 13.514v6.717c-.357-.2-.773-.498-1.325-.892M13 20.23c.357-.2.773-.498 1.325-.892l3-2.143c.821-.586 1.232-.88 1.453-1.31S19 14.95 19 13.942v-3.883c0-.322 0-.592-.007-.825L13 13.514zm5.128-12.837L12 11.771L5.872 7.394c.212-.168.475-.356.803-.59l3-2.143C10.798 3.859 11.36 3.458 12 3.458s1.202.4 2.325 1.203l3 2.143c.329.234.591.422.803.59" clip-rule="evenodd"/></svg>
                        </span>
                    </div>

                    <div className="w-full h-8 shadow-custom-sof rounded-lg cursor-pointer text-[#ff6666] bg-[white] relative text-sm content-center text-center flex items-center justify-center gap-1">
                        <h3>Remove</h3>
                        <span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ff6666" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a1 1 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z"/></svg>                        </span>
                    </div>
                    </div>
         </div>
        <h3 className="text-[11px] font-light mt-2 text-pretty">Add product's 3D model.</h3>
        </div>

        </>
    )
}