
const SuperheroList = () => {

  return (
    <div className=" mx-auto p-1 md:p-4 text-white bg-[#00031C] min-h-screen">
      {/* header session */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between  my-6 mx-4 md:mx-8 lg:mb-20">
        {/* super hero Logo */}
        <h1 className="text-4xl font-bold text-center mb-8 md:mb-0">Super<span className="text-[#6A60F1]">Hero</span>  DB</h1>

        <div className="flex gap-7 items-center">
          <input
            placeholder="Search by name..."
            className=" px-3 py-2 border rounded-md"
          />
          
          
        </div>
      </header>

     
  


      
    </div>
  );
}


export default SuperheroList;