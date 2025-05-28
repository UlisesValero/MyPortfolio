const Cards = ({ image, name, description, status, total, current, index, setCurrent }) => {
  return (
    <section className="bg-lgray dark:bg-ddgray flex flex-col dark:text-white shadow-md h-[100%] ">
      <div className="flex justify-center">{image}</div>
      <div className="flex flex-col px-2 py-6 md:px-6 h-full">
        <div className="font-h3 text-xl font-bold py-3">{name}</div>
        <div className="font-p text-lg dark:text-lgray">{description}</div>
        <div
          className={`font-p text-sm font-bold ${
                ['Offline', 'Inactivo'].includes(status) ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </div>

        <div className="flex justify-center h-full items-end gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                i === current
                  ? "bg-black dark:bg-white"
                  : "bg-black/30 dark:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
