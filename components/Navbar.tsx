import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="h-16 md:h-18 flex items-center px-5 md:px-8 lg:px-0 lg:w-[92%] xl:w-[90%] mx-auto">
        <Link href={"/"}>
          <p className="font-semibold">
            IMD<span className="bg-amber-300 rounded-sm px-[2.5px]">b</span>{" "}
            <span className="text-teal-700">Clone</span>
          </p>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
