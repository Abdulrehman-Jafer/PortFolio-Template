import me from "../assets/Me.png"
import Arrow from "../assets/Arrow.png"
import fb from "../assets/fb.png"
const Hero = () => {
    return (
        <>
       <div className="mx-auto">
       <div className="flex items-center py-10 flex-wrap">
            <div className="relative min-w-max mediaAuto">
                <div className="mediaBlock text-2xl mb-3 ">
                Hello! I Am <span className="text-violet-300 font-bold">Abdulrehman</span>
                </div>
                <img src={me} alt="me" />
                <img src={Arrow} alt="arrow" className="absolute -top-14 -right-10  mediaHidden"/>
                <div className="absolute -top-8 -right-52 mediaHidden">Hello! I Am <span className="text-violet-300 font-bold">Abdulrehman</span></div>
            </div>
            <div>
                <div className="text-5xl"><span className="text-sm underline ">A Designer who</span><br />
                    Judges a book <br />
                    by its <span className="border rounded-3xl rounded-tr-2xl rounded-bl-2xl rounded-br-fullxl p-1 text-violet-300 font-semibold leading-relaxed">cover</span>...
                </div>
                <div className="text-orange-400 text-ellipsis">
                    Becauese if the cover does not impress you what else can?
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-10 py-10">
            <div className="flex flex-col text-5xl">
                <div className="fontFamily">I am a Software Engineer.</div>
                <div className="flex text-sm pt-3">Currently,I am craving for new experiences.</div>
            </div>
            <div className="max-w-screen-sm tracking-widest">
                A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.
            </div>
        </div>
       </div>
        </>
    )
}
export default Hero;