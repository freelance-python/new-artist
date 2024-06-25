const AuthorsCard = (author) => {
  console.log("authorauthorauthorauthor", author);
  return (
    <a
      href={`/authors/${name.toLowerCase().replace(/ /g, "-")}`}
      className="group relative flex cursor-pointer flex-col items-center bg-light text-center"
    >
      <span className="relative mb-6 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-350">
        <img src={author?.author?.imageUrl} alt={author?.author?.name} />
      </span>
      <span className="block text-center font-semibold text-[#1f2937] transition-colors group-hover:text-orange-500">
        {author?.author?.name}
      </span>
    </a>
  );
};

export default AuthorsCard;
