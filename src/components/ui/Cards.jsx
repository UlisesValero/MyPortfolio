const Cards = ({ image,name, description, status }) => {
    return (
      <section className="bg-lgray dark:bg-ddgray flex flex-col gap-10  dark:text-white shadow-md p-4 h-120 ">
        <div className="h-[70%]  ">
        <div className="mb-5 flex justify-center h-full">
          {image}
          </div>
          </div>
        <div className="flex flex-col gap-2">
        <div className="font-h3 font-bold">{name}</div>
        <div className="font-p text-sm dark:text-lgray">{description}</div>
        <div className="font-p text-xs text-green-500">{status}</div>
      </div>
      </section>
    );
  };
  
  export default Cards;
  