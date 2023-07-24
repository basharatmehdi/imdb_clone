import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 flex items-center justify-center">
      <p>
        Made with <span className="text-red-600">&#x2764;</span> by{" "}
        <span className="font-semibold text-teal-900 hover:text-teal-700">
          <Link href={"https://basharatmehdi.vercel.app"}>Basharat Mehdi</Link>
        </span>
      </p>
    </div>
  );
};
export default Footer;
