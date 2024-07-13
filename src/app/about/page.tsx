import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="center-all">
        <h3 className="sub-page-title">About</h3>
        <p><a href="https://www.metro.us/everything-to-know-about-facemash-the-site-zuckerberg-created-in-college-to-rank-hot-women/" target="_blank">
        <u>Facemash</u></a>
        {' '}was a website developed by Mark Zuckerberg in 2003 that allows visitors to compare pictures of two students whether who is more attractive. 
        </p>
        <p className="aura-color">Now it has a CT twist. Happy auramaxxing.</p>
        <div className="back-footer">
      <button><a href="/">Back</a></button>
    </div>
    </div>
    </main>
  );
}
