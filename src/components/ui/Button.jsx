
const Button = ({ text }) => {
    return (
        <button className="w-full bg-gradient-to-tr from-amber-100 via-lime-50 to-emerald-100
                        dark:bg-gradient-to-tr dark:from-indigo-500 dark:via-indigo-600 dark:to-sky-500 dark:text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-ddgray/50 dark:focus:ring-lgray">
            {text}
        </button>
    )
}

export default Button