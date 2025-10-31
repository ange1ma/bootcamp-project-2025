import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className="project">
        <Link href="/">
          <Image src="/website.png" alt="A screenshot of my website" width={450} height={400}/>
          </Link>
        <div className="project-details">
          <p className="project-name">Angel's Personal Website</p>
          <p className="project-description">
            A project created with the help of H4I's starter pack, made with 
            HTML and CSS. The picture features the bare bones of the website before CSS styling.
          </p>
          <a href="/">Learn more!</a>
        </div>
      </div>
    </main>
  );
}