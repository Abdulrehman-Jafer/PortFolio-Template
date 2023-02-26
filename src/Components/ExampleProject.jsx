import React from 'react'
import {TbClick} from "react-icons/tb"
export const ExampleProject = ({title,desc,image,flip=false}) => {
    return (
        <div className='text-white mx-auto flex items-center relative mb-24 flex-wrap justify-center' style={flip?{textAlign:"right"}:{textAlign:"left"}}>
            <div className='flex flex-col 2xl:absolute' style={flip?{right:"-400px"}:{left:"-400px"}}>
                <p style={{color:"#9857D3"}}>Featured Project</p>
                <p style={{color:"#CCD6F6"}} className="text-[2rem]">{title}</p>
                <div className='w-full max-w-[500px] mt-6 bg-gradient-to-tr from-violet-700 backdrop-blur-[100px] p-[1rem] rounded-[1rem]' >
                    <p>{desc}</p>
                </div>
                <div className='flex gap-2 mt-3 text-2xl px-5' style={flip?{justifyContent:"end"}:{justifyContent:"start"}}>
                    {<TbClick/>}
                    {<TbClick/>}
                </div>
            </div>
            <div>
                <img src={image} alt="portfolio" className='sm:min-w-[280px] sm:w-[100%] w-[300px] max-w-[400px] rounded-lg'/>
            </div>

        </div>
    )
}
