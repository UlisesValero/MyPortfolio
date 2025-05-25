
const Button = ({text}) => {
    return (
        <button className=" bg-llblue dark:bg-dgray dark:text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-ddgray/50 dark:focus:ring-lgray w-fit">
            {text}    
    </button>
    )
}

export default Button