import Hero from "./Hero"
import FoodContent from "../ui/FoodContent"
import FootballContent from "../ui/FootballContent"


const Hobbies = () => {
    return (
        <>
        <Hero />
        <div className="bg-theme2 pt-30">
            <FoodContent />
            <FootballContent />
        </div>
</>
    )
}

export default Hobbies

