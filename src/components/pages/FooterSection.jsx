import SocialMedia from "../ui/SocialMedia"


const FooterSection = () => {
    return (
        <footer className="h-[65vh] flex justify-center items-center bg-ddgray/50 ">
            <section className="h-[90%] w-fit md:w-[90%] bg-ddgray">
            <SocialMedia />
            </section>
        </footer>
    )
}

export default FooterSection