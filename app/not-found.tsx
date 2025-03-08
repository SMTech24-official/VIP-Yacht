import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <h1 className="text-3xl md:text-6xl font-bold text-fontColor">
        {" "}
        Page not found.
      </h1>
      <p className="text-xl text-gray-600 mt-4 text-center">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-white bg-secondary hover:bg-primary duration-300 transition-all rounded-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}
