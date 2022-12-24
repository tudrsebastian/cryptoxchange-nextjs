import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import cryptologo from "../../public/cryptologo-removebg-preview.png";
const Navbar = () => {
  const { user, error, isLoading } = useUser();
  if (error) return <div>Oops something went wrong!</div>;
  if (isLoading) return <div>Loading ...</div>;
  return (
    <nav
      className="
    w-full
    flex flex-wrap
    items-center
    justify-between
    mb-8
    shadow-lg
    navbar navbar-expand-lg navbar-light"
    >
      <div className="w-32">
        <Image
          className="h-auto"
          src={cryptologo}
          alt="logo"
          width={100}
          height={25}
        />
      </div>
      <div>
        <h1 className="text-4xl subpixel-antialiased tracking-wide">
          Crypto X-Change
        </h1>
      </div>
      <div className="flex">
        {!user ? (
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <a href="/api/auth/login">Login</a>
          </button>
        ) : (
          <div className="flex justify-between gap-4 mr-12">
            <img src={user.picture} alt={user.name} width={40} />
            <p className="mt-2">{user.email}</p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <a href="/api/auth/logout">Logout</a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
