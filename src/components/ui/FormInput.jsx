import Button from "./Button"

const FormInput = () => {
    return (
        <section className="flex flex-col gap-5">
<div className="relative">
                <input
                  type="text"
                  id="name1"
                  placeholder=" "
                  required
                  className="peer w-full border border-dgray dark:bg-ddgray text-white rounded px-3 pt-7 pb-2 focus:outline-none focus:border-lblue"
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                  peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
                >
                  Nombre
                </label>
              </div>
              
              <div className="relative">        
                <input
                  type="email"
                  id="name2"
                  placeholder=" "
                  required
                  className="peer w-full border border-dgray bg-gray dark:bg-ddgray text-white rounded px-3 pt-7 pb-2 focus:outline-none focus:border-lblue"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                  peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
                >
                  Email
                </label>
                </div>
               
                <div className="relative">
                <input
                  type="tel"
                  id="name3"
                  placeholder=" "
                  required
                  className="peer w-full border border-dgray dark:bg-ddgray text-white rounded px-3 pt-7 pb-2 focus:outline-none focus:border-lblue"
                />
                <label
                  htmlFor="phone"
                  className="pointer-events-none absolute left-3 top-2 text-gray-400 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-dgray 
                  peer-focus:top-0 peer-focus:text-sm peer-focus:text-lblue"
                >
                  Teléfono
                </label>
              </div>
              <div>
                <Button text={"Enviar"}/>
              </div>
              </section>
    )
}

export default FormInput