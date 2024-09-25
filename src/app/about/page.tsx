export default function About() {
  return (
    <main className="flex bg-bg-200 text-white font-bold text-3xl min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center max-w-5xl ">
        <h3 className="font-bold py-4">About</h3>

        <p className="py-2">
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

        <button className="bg-bg-100 text-white py-2 px-8 mt-4 rounded">
          <a href="/">Back</a>
        </button>
      </div>
    </main>
  );
}
