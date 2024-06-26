import ItemsMyWishList from "./ItemsMyWishList";

const MyWishlistsProfileSection = () => {
  return (
    <div className="p-5 md:p-8 bg-[#fff] shadow rounded w-full sm:shadow">
      <div className="flex w-full flex-col">
        <div className="mb-8 flex items-center justify-center sm:mb-10">
          <h1 className="text-center text-lg font-semibold text-heading sm:text-xl">
            My Wishlists
          </h1>
        </div>
        <ItemsMyWishList />
      </div>
    </div>
  );
};

export default MyWishlistsProfileSection;
