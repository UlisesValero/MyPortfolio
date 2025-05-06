import "../../App.css"
import FormInput from "../ui/FormInput"

const ContactSection = () => {
    return (
        <section className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center">
            <div className="md:w-1/2">
            <div>
                <h1>Trabaja conmigo</h1>
            </div>
            <div className="flex items-center">
                <form action="submit">
                    <FormInput/>
              </form>
            </div>
            </div>
            <div className="md:w-1/2">
                CURRICULUM
            </div>
            </div>
            </section>
    )
}

export default ContactSection