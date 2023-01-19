import logo from "../images/logo.png"
import { BsList } from "react-icons/bs"
import { Link } from "react-router-dom"

const MobileNavbar = ({displayer,display}) => {
   
    return (
        <div className="py-3 relative shadow-sm shadow-black mediaBlock" style={{ background: "#1A0B2E" }}>
            <div className="flex justify-between items-center">
                {<BsList className="text-4xl cursor-pointer" onClick={displayer}/>}
                <img src={logo} alt="logo" className="w-7" />
            </div>
            <div className="text-lg text-white flex flex-col absolute w-full z-10" style={{display:display?"block":"none",background: "#1A0B2E"}}>
                    <Link to="/"><div className="cursor-pointer p-2 rounded mt-2 hover:bg-slate-500" >Home</div></Link>
                    <Link to="/about"><div className="cursor-pointer p-2 rounded mt-2 hover:bg-slate-500" >About</div></Link>
                    <Link to="/lab"><div className="cursor-pointer p-2 rounded mt-2 hover:bg-slate-500" >Lab</div></Link>
                </div>

        </div>
    )
}
export default MobileNavbar