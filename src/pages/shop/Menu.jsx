import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); //items shown per page

  //loading data
  useEffect(() => {
    //fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data)
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    //call the function
    fetchData();
  }, []);

  //fitering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  //sorting based on A-Z , Z-A , Low-High pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-custom-gradient min-h-screen">
        <div className="py-48 flex flex-col  justify-center items-center ">
          {/* texts */}
          <div className="text-center space-y-7 px-4">
            <h2 className="text-black md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious
              <span className="text-puce"> Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Come with family and feel the joy of mouthwatering sweet treats
              like Tiramisu, Chocolate Fondue, Crème Brûlée, Macarons, and more,
              all at affordable prices.
            </p>
            <button className="btn bg-puce px-8 py-3 font-semibold text-white rounded-full border-none shadow-lg ">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container">
        {/* filtering and sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all category btns */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : "text-black font-semibold"}
            >
              All
            </button>

            <button
              onClick={() => filterItems("Cakes and Pastries")}
              className={
                selectedCategory === "Cakes and Pastries" ? "active" : "text-black font-semibold"
              }
            >
              Cakes
            </button>

            <button
              onClick={() => filterItems("Ice Creams")}
              className={selectedCategory === "Ice Creams" ? "active" : "text-black font-semibold"}
            >
              Ice Creams
            </button>

            <button
              onClick={() => filterItems("Cookies and Brownies")}
              className={
                selectedCategory === "Cookies and Brownies" ? "active" : "text-black font-semibold"
              }
            >
              Brownies
            </button>
          </div>

          {/* Sorting base filtering */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 test-white" />
            </div>
            {/* sorting options */}
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* products card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-puce text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
