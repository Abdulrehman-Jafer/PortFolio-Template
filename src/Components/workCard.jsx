const WorkCard = ({image,title}) => {
    return (
        <div className="flex gap-7 bg-gradient-to-br from-purple-800 to-purple-400 p-4 items-center justify-center rounded-lg flex-wrap">
            <div className="min-w-3/12">
                <img src={image} alt="image" className="w-full"/>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-5xl">
                    {title}
                </div>
                <div className="text-sm tracking-wider">
                    Take your client onboard seamlessly by our amazing
                    tool of digital onboard process.
                </div>
                <div className="border border-slate-900 rounded-xl inline px-10 py-3 w-fit text-orange-200 cursor-pointer hover:bg-violet-800 ">
                    Learn More
                </div>
            </div>
        </div>
    )
}
export default WorkCard