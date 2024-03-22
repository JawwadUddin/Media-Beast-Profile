import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="sm:flex justify-center p-5 h-screen gap-20">
        <div className="flex justify-center items-center">
          <img
            src="/images/logo-icon.gif"
            alt="Logo"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="mb-10 font-bold text-3xl text-teal-500 text-center">
              Welcome to Media Beast Profile!
            </h1>
            <div className="bg-teal-300 hover:bg-teal-500 text-white font-bold rounded mt-5 text-center">
              <Link className="w-full block  py-2 px-4" href="/profile">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
