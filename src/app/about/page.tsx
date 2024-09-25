import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h3 className="text-xl font-bold py-4">About</h3>

        <p className="text-base py-2">
          <a
            href="https://www.metro.us/everything-to-know-about-facemash-the-site-zuckerberg-created-in-college-to-rank-hot-women/"
            target="_blank"
            className="underline text-blue-500"
          >
            Facemash
          </a>{" "}
          was a website developed by Mark Zuckerberg in 2003 that allowed
          visitors to compare pictures of two students to decide who was more
          attractive.
        </p>

        <p className="text-green-500 py-4">
          Now it has a CT twist. Happy auramaxxing.
        </p>

        <div className="pt-8">
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            <a href="/">Back</a>
          </button>
        </div>
      </div>
    </main>
  );
}
