const Cards = ({ name, description, status }) => {
    return (
      <section className="flex flex-col bg-white shadow-md rounded-lg p-4">
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-600">{description}</div>
        <div className="text-xs text-green-500">{status}</div>
      </section>
    );
  };
  
  export default Cards;
  