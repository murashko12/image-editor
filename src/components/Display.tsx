import { LuFlipHorizontal2, LuFlipVertical2, LuRotateCcw, LuRotateCw } from "react-icons/lu"
import { TButton } from "../types/TButton"
import Button from "./Button"
import { IoIosImages } from "react-icons/io"

const Display = () => {

    const FilterButtons: TButton[] = [
        {
            children: "brightness",
            func: () => console.log("brightness")
        },{
            
            children: "grayscale",
            func: () => console.log("grayscale")
        },{
            
            children: "sepia",
            func: () => console.log("sepia")
        },{
            
            children: "saturate",
            func: () => console.log("saturate")
        },{
            
            children: "contrast",
            func: () => console.log("contrast")
        },{
            
            children: "hue-rotate",
            func: () => console.log("HueRotate")
        }
    ]

    const RotateFlipButtons: TButton[] = [
        {
            children: <LuRotateCcw size={25} />,
            func: () => console.log("brightness")
        },{
            
            children: <LuRotateCw size={25} />,
            func: () => console.log("grayscale")
        },{
            
            children: <LuFlipHorizontal2 size={25} />,
            func: () => console.log("sepia")
        },{
            
            children: <LuFlipVertical2 size={25} />,
            func: () => console.log("saturate")
        }
    ]

    return (
        <div className="bg-secondBackgroundColor w-2/4 rounded-lg">
            <h3 className="text-center uppercase font-bold text-3xl">image editor</h3>
            <article className="grid grid-cols-2 gap-2">    
                <figure className="p-2">
                    
                    <p className="my-2">Filters</p>
                    
                    <div className="grid grid-cols-2 gap-2"> 
                        {
                            FilterButtons.map((btn, id) => (
                                <Button key={id} children={btn.children} func={btn.func}/>)
                            )
                        }
                    </div>

                    <div className="">

                    </div>
                    <input className="w-full accent-rose-500" type="range" name="" id="" min={0} max={200} defaultValue={100} />

                    <p className="my-2">Rotate & Flip</p>

                    <div className="grid grid-cols-4 gap-2">
                        {
                            RotateFlipButtons.map((btn, id) => (
                                <Button key={id} children={btn.children} func={btn.func}/>)
                            )
                        }
                    </div> 
                </figure>
                <figure className="bg-firstBackgroundColor m-2 rounded-md">
                    <label htmlFor="" className="w-full h-full flex justify-center items-center flex-col">
                        <IoIosImages size={80} />
                        <span>Choose Image</span>
                    </label>
                </figure>
            </article>
            <article className="grid grid-cols-2 gap-2">
                <figure className="grid grid-cols-2 gap-2 p-2">
                    <Button children={"reset"} func={() => console.log("reset")}/>
                    <Button children={"save image"} func={() => console.log("save image")}/>
                </figure>
                <figure className="p-2">
                    <Button children={"choose image"} func={() => console.log("choose image")}/>
                </figure>
            </article>
        </div>
    )
}

export default Display
