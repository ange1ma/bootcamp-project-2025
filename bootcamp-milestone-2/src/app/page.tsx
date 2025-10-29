import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1 className="page-title">Welcome to my website!</h1>
      <div className="about">
        <div className="about-image">
          <Image src="/mika-and-luca.png" alt="A picture of my two cats（•˕•マ" width={250} height={250}/>
          <Image src="/luca1.png" alt="pic of baby luca" width={150} height={150}/>
          <Image src="/mika3.png" alt="pic of baby mika" width={150} height={150}/>
        </div>
      </div>
      <div className="about-text">
        <p>
          My name is Angel Ma, and I'm from Los Angeles, more specifically, the 626 area! I'm currently a 3rd year Computer Science major at Cal Poly SLO minoring in Child Development. In my free time, I enjoy experimenting with lattes and playing games!
        </p>
        <p>
          I have two <em>purr-fect</em> companions! The picture at the left features my beloved cats, Luca and Mika.
        </p>
      </div>

      <footer className="footer">
        © 2025 Angel's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}