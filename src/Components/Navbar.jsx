import logo from "../images/logo.png"
import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <>
        <div className="p-4 shadow-sm shadow-black mediaHidden" style={{background:"#1A0B2E"}}>
            <div className="flex w-full justify- items-center">
                <div className="flex justify-center w-6/12">
                    <img src={logo} alt="logo" className="w-9" />
                </div>
                <div className="flex text-lg w-6/12 justify-evenly text-white">
                <Link to="/"><div className="cursor-pointer hover:bg-black p-2 border-r-4 rounded w-20">Home</div></Link>
                <Link to="/about"><div className="cursor-pointer hover:bg-black p-2 border-r-4 rounded w-20">About</div></Link>
                <Link to="/lab">   <div className="cursor-pointer hover:bg-black p-2 border-r-4 rounded w-20">Lab</div></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar