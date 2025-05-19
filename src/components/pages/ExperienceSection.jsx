import ExperienceCards from "../ui/ExperienceCards"

const ExperienceSection = () => {
    return (
        <section className="flex justify-center">
            <div className="bg-lgray/30 dark:bg-ddgray/75 p-2 w-[90%] rounded-3xl flex justify-center mt-15">
            <ExperienceCards/>
            </div>
        </section>
    )
}

export default ExperienceSection