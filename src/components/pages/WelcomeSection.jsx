import "../../App.css"
import Button from "../ui/Button"
import Map from "../ui/Map"

const WelcomeSection = () => {
    return (
        <>
        <section className="px-4 flex flex-col text-black dark:text-white transition-all duration-300">
            <div className="flex justify-end">
                <Button text={"Contactame ✍🏻"}/>
            </div>

            <h1 className="mt-15 font-h1 text-5xl">Hola,</h1>

            <div className="flex flex-row items-center gap-2">
                <h1 className="text-5xl font-h1">Soy</h1>
                <div className="flex items-center">
                    <img
                        className="h-15 mr-0.5 "
                        src="/assets/uLogoTitle.png"
                        alt="U Logo"
                    />
                    <h1 className="text-5xl font-h1">lises</h1>
                </div>
            </div>
            <h3 className="font-h3 font-semibold ">Front-end developer</h3>
        </section>
        <div className="flex justify-center items-center my-30 bg-dgray/50">
            <Map/>
        </div>
        </>
    )
}

export default WelcomeSection