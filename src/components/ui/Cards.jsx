const Cards = ({ image,name, description, status }) => {
    return (
      <section className="flex flex-col bg-lgray dark:bg-ddgray dark:text-white shadow-md rounded-3xl p-4">
        <div className="mb-5 rounded-full h-52 flex justify-center ">
          {image}
          </div>
        <div className="font-bold">{name}</div>
        <div className="text-sm dark:text-lgray">{description}</div>
        <div className="text-xs text-green-500">{status}</div>
      </section>
    );
  };
  
  export default Cards;
  