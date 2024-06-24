import AuthorsCard from "./AuthorsCard";
import { IoSearchOutline } from "react-icons/io5";

const AuthorsContainer = () => {
  const authors = [
    {
      name: "Kaity Lerry",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1591/Author-img-800-%283%29.jpg",
    },
    {
      name: "John Doe",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1593/Author-img-800-%281%29.jpg",
    },
    {
      name: "Jane Smith",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1595/Author-img-800-%289%29.jpg",
    },
    {
      name: "Alice Johnson",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1597/Author-img-800-%282%29.jpg",
    },
    {
      name: "Bob Brown",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1599/Author-img-800-%287%29.jpg",
    },
    {
      name: "Charlie Davis",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1601/Author-img-800-%288%29.jpg",
    },
    {
      name: "Daisy Clark",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1603/Author-img-800-%284%29.jpg",
    },
    {
      name: "Edward Wilson",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1605/Author-img-800-%286%29.jpg",
    },
    {
      name: "Fiona Martinez",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1607/Author-img-800-%281%29.jpg",
    },
    {
      name: "George Taylor",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1609/Author-img-800-%2810%29.jpg",
    },
    {
      name: "Helen White",
      imageUrl:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1611/Author-img-800-%285%29.jpg",
    },
  ];
  return (
    <div className="min-h-screen px-5 pt-10 pb-16 mx-auto max-w-1920 xl:py-14 xl:px-16">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl text-[#009f7f]">
          Search Our beloved authors
        </h1>
        <p className="text-base text-[#1f2937] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="w-full max-w-screen-md mt-12">
          <form className="w-full">
            <div className="relative flex rounded md:rounded-lg h-11 md:h-12">
              <input
                id="search"
                className="item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 focus:ring-0 search-minimal bg-gray-100 pl-14 pr-4 border border-transparent focus:border-[#009f7f] focus:bg-[#fff]"
                placeholder="Search your favorite author from here"
                value=""
              />
              <button className="absolute flex h-full w-10 items-center justify-center text-body transition-colors duration-200 hover:text-[#019376] focus:text-[#019376] focus:outline-0 left-0 md:w-14">
                <IoSearchOutline />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto w-full py-8 lg:py-14 xl:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7">
          {authors.map((author, index) => (
            <AuthorsCard key={index} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorsContainer;
