import { useState } from "react"
import ImageInput from "../../../Components/Admin/Inputs/ImageInput";
import TextInput from "../../../Components/Admin/Inputs/TextInput";
import Dropdown from "../../../Components/Admin/Inputs/Dropdown";
import ThreeDInput from "../../../Components/Admin/Inputs/ThreeDInput";
import NumberInput from "../../../Components/Admin/Inputs/NumberInput";
import CheckboxInput from "../../../Components/Admin/Inputs/CheckboxInput";

export default function AddProduct() {

    const [imageArray, setImageArray] = useState([null, null, null, null])
    const [index, setIndex] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')  
    const [category, setCategory] = useState('Select')
    const [threeDModel, setThreeModel] = useState()



    return (
        <>
            <div className="w-full h-full mb-10 mx-auto pt-5 flex flex-col gap-8">
                <div className="w-full h-fit flex gap-8">
                    <ImageInput imageArray={imageArray} setImageArray={setImageArray} />
                    <div className="flex flex-col w-full gap-8">
                        <div className="w-full h-fit flex gap-8">
                            <TextInput label={'Name'} value={name} setFunction={setName} />
                            <TextInput label={'Description'} value={description} setFunction={setDescription} />
                        </div>
                        <div className="w-full h-fit flex gap-8">
                            <Dropdown label={'Category'} dropdownArray={['Gold', 'Diamond', 'fddfdf', 'dddddddddererer', 'dsshdifife', 'ssssswww']} selectedElement={category} setSelectedElement={setCategory} />
                            <Dropdown label={'Gender'} dropdownArray={['Gold', 'Diamond', 'fddfdf', 'dddddddddererer', 'dsshdifife', 'ssssswww']} selectedElement={category} setSelectedElement={setCategory} />
                            <Dropdown label={'Occasions'} dropdownArray={['Gold', 'Diamond', 'fddfdf', 'dddddddddererer', 'dsshdifife', 'ssssswww']} selectedElement={category} setSelectedElement={setCategory} />


                        </div>
                        <div className="w-full h-fit flex gap-8">
                            <Dropdown label={'Metal'} dropdownArray={['Gold', 'Diamond', 'fddfdf', 'dddddddddererer', 'dsshdifife', 'ssssswww']} selectedElement={category} setSelectedElement={setCategory} />
                            <NumberInput label={'Metal weight'} value={description} setFunction={setDescription} />
                            <NumberInput label={'Karat'} value={description} setFunction={setDescription} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-8">
                    <ThreeDInput threeDModel={threeDModel} setThreeModel={setThreeModel} />
                    <div className="flex flex-col w-full gap-8">
                        <div className="w-full h-fit flex gap-8">
                            <NumberInput label={'Frozen unit price'} value={description} setFunction={setDescription} />
                            <NumberInput label={'Making charge'} value={description} setFunction={setDescription} />
                            <NumberInput label={'Making discount'} value={description} setFunction={setDescription} />
                        </div>
                        <div className="w-full h-fit flex gap-8">
                            <NumberInput label={'Product discount'} value={description} setFunction={setDescription} />
                            <NumberInput label={'Gst'} value={description} setFunction={setDescription} />
                            <NumberInput label={'Handcrafted charge '} value={description} setFunction={setDescription} />
                        </div>
                        <div className="w-full h-fit flex gap-8">
                            <CheckboxInput label={'Is classic'} value={description} setFunction={setDescription} />
                            <CheckboxInput label={'Is handcrafted'} value={description} setFunction={setDescription} />

                            <NumberInput label={'Designing charge'} value={description} setFunction={setDescription} />
                        </div>
                    </div>
                </div>

                <button className="py-3 px-4 self-end bg-gradient-to-r bg-[#56433d] w-fit rounded-md float-right text-white font-semibold">
                    Save
                </button>
            </div>
        </>
    )
}
