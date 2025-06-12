import Button from "../components/ui/Button"

const NotFoundPage = () => {
    return (
        <div className="bg-theme3 w-full h-[full] flex justify-center ">
            <div className="flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-white font-h1 text-5xl">Not found page - Error 404</h1>
            <a href="/">
            <Button text={"Go back Home"} />
            </a>
            </div>
        </div>
    )
}

export default NotFoundPage