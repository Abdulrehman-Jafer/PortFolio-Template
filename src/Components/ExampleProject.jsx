import React from 'react'
import {TbClick} from "react-icons/tb"
export const ExampleProject = ({image,flip=false}) => {
    return (
        <div className='text-white mx-auto flex items-center relative mb-24 flex-wrap justify-center' style={flip?{textAlign:"right"}:{textAlign:"left"}}>
            <div className='flex flex-col 2xl:absolute' style={flip?{right:"-400px"}:{left:"-400px"}}>
                <p style={{color:"#9857D3"}}>Featured Project</p>
                <p style={{color:"#CCD6F6"}} className="text-[2rem]">Example Project</p>
                <div className='w-full max-w-[500px] mt-6 bg-gradient-to-tr from-violet-700 backdrop-blur-[100px] p-[1rem] rounded-[1rem]' >
                    <p>A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.</p>
                </div>
                <div className='flex gap-2 mt-3 text-2xl px-5' style={flip?{justifyContent:"end"}:{justifyContent:"start"}}>
                    {<TbClick/>}
                    {<TbClick/>}
                </div>
            </div>
            <div >
                <img src={image} alt="portfolio" className='rounded-lg p min-w-[320px]' style={{background:"#2B0B3A"}}/>
            </div>

        </div>
    )
}
