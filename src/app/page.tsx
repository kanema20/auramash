import Image from "next/image";

const clickLeft = () => {}
const clickRight = () => {}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div>
    <div className="wrapper">
      <div className="title">
        <h1>FACEMASH</h1><small className="aura-color">[auramaxxing edition]</small>
      </div>
      <div className="container">
        <h3>
          Were we let in for our <span className="aura-color">aura</span>? No. Will we be judged by it? Yes.
        </h3>
        <h2>Who has more aura? Click to Choose.</h2>
        <div className="img-wrapper">
          <div className="flex flex-col">
            <Image src="https://bafybeidbgzfakqolegmo2kw3zfglc7n6axns5mhjyse7sl6zd7gckj6zae.ipfs.w3s.link/%40Banks.jpeg" width={400} height={400} alt="Left Image" id="leftImg" onClick={clickLeft()} />
            <p>ansem</p>
          </div>
          <h3 className="or-char">OR</h3>
          <div className="flex flex-col">
            <Image src="https://bafybeidbgzfakqolegmo2kw3zfglc7n6axns5mhjyse7sl6zd7gckj6zae.ipfs.w3s.link/%40Caitlyn_Jenner.jpeg" width={400} height={400} alt="Right Image" id="rightImg" onClick={clickRight()} />
            <p>ansem</p>
          </div>        
        </div>

        <ul className="house-list">
          <li><a href="#">ADAMS</a></li>
          <li><a href="#">CABOT</a></li>
          <li><a href="#">DUNSTER</a></li>
          <li><a href="#">ELIOT</a></li>
          <li><a href="#">KIRKLAND</a></li>
          <li><a href="#">LEVERETT</a></li>
          <li><a href="#">LOWELL</a></li>
          <li><a href="#">MATHER</a></li>
          <li><a href="#">PFOHO</a></li>
          <li><a href="#">RANDOM</a></li>
        </ul>
        
        <ul className="footer-list">
          <li><a href="/about">About</a></li>
          <li><a href="#">Submit</a></li>
          <li><a href="/rankings">Rankings</a></li>
          <li><a href="#">Previous</a></li>
        </ul>
      </div>
    </div>
  </div>

    </main>
  );
}
