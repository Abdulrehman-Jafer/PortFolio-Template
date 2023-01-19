import WorkCard from "./workCard";
import star1 from "../images/star.png"
import star2 from "../images/star2.png"
import star3 from "../images/star3.png"
import star4 from "../images/star4.png"

const Info = () => {
    return (
     <div className="container mx-auto py-8 flex flex-col gap-7">
        <div className="text-6xl mx-auto">
            Work Experience
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
            <WorkCard image={star1} title={"CIB on the Mobile"}/>
            <WorkCard image={star2} title={"CIB on the Mobile"}/>
            <WorkCard image={star3} title={"CIB on the Mobile"}/>
            <WorkCard image={star4} title={"CIB on the Mobile"}/>
        </div>
     </div>
    )
}
export default Info;