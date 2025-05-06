
const Button = ({text}) => {
    return (
        <button className="font-p cursor-pointer relative inline-block px-3 py-2 font-semibold tracking-wide bg-gradient-to-r from-[#2ac1ef] to-[#1fa6d4] rounded-xl shadow-lg ring-1 ring-white/20 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ac1ef] mt-4">
            {text}    
    </button>
    )
}

export default Button