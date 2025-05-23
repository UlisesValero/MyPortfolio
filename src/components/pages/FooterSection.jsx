import SocialIcons from "../ui/SocialIcons"


const FooterSection = () => {
    return (
        <footer className="h-[65vh] flex justify-center items-center bg-ddgray/50 ">
            <section className="h-[90%] w-fit md:w-[90%] bg-ddgray">
            <SocialIcons />
            </section>
        </footer>
    )
}

export default FooterSection