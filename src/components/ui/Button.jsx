import { cn } from "../../lib/utils"

const Button = ({ text, className }) => {
    return (
        <button className={cn(
            "w-fit dark:bg-ddgray bg-lgray/30 text-white hover:text-green-300 dark:shadow-salmon shadow-lgray dark:border-salmon border-lgray border shadow-custom font-bold py-3 px-6 rounded-2xl ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-lgray dark:focus:ring-salmon dark:hover:bg-salmon/70 hover:bg-lgray/70 cursor-pointer", 
            className)}>
            {text}
        </button>
    )
}

export default Button