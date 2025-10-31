import Link from "next/link";

export default function Resume() {
  return (
    <main>
      <h1 className="page-title">Resume</h1>
      {/*to access resume*/}
      <Link href="/resume4site.pdf" download>
        Download resume!
      </Link>
      {/*resume*/}
      <div className="resume">
        {/*education*/}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              Bachelor of Science in Computer Science
            </h3>
            <p className="entry-info">
              California Polytechnic State University, San Luis Obispo | Expected
              Graduation May 2027
            </p>
          </div>
        </section>
        {/*experience*/}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="entry">
            <h3 className="entry-title">E-commerce Store Manager</h3>
            <p className="entry-info">Remote | Mar 2024 - Present</p>
            <ul className="entry-description">
              <li>
                Curated and sourced secondhand vintage goods for online resale.
              </li>
              <li>
                Wrote clear, persuasive product descriptions to drive customer
                engagement.
              </li>
              <li>
                Responded to all customer inquiries within 24 hours, ensuring
                professional service and satisfaction.
              </li>
              <li>
                Maintained a 5-star customer rating over the past year through
                consistent satisfaction and service.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="entry-title">Private Tutor</h3>
            <p className="entry-info">Monterey Park | Oct 2023 - Apr 2023</p>
            <ul className="entry-description">
              <li>
                Created custom lesson plans and practice worksheets relating to
                school curriculum and learning goals.
              </li>
              <li>
                Developed strong communication skills through regular updates
                with parents, explaining student progress.
              </li>
              <li>
                Maintained a positive, supportive environment to motivate and
                engage students.
              </li>
              <li>
                Substituted for absent teachers, independently managing
                classrooms of 20+ students.
              </li>
            </ul>
          </div>
        </section>
        {/*coursework*/}
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <div className="entry">
            <ul className="course-list">
              <li>Intro to Computer Science</li>
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Intro to Computer Organization</li>
              <li>Discrete Structures</li>
              <li>Design & Analysis of Algorithms</li>
              <li>Systems Programming</li>
            </ul>
          </div>
        </section>
        {/*projects*/}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="entry">
            <h3 className="entry-title">Personal Website</h3>
            <p className="entry-info">
              Designed and built a personal website using HTML and CSS.
            </p>
            <ul className="entry-description">
              <li>Implemented multiple pages using HTML and CSS.</li>
              <li>Focused on semantic HTML design.</li>
              <li>Used best practices for Git and GitHub.</li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="entry-title">
              DELL OPTIPLEX OEM CONVERSION{" "}
              <span className="project-subtitle">
                (PC Refurbishment Project)
              </span>
            </h3>
            <ul className="entry-description">
              <li>
                Converted an OEM Dell Optiplex into a custom PC by upgrading and
                reconfiguring hardware parts to improve system performance and
                reliability.
              </li>
              <li>
                Installed and configured Windows 11 OS, WiFi, BIOS, and driver
                updates to ensure stability for daily use.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="entry-title">
              PROJECT SPECTRA{" "}
              <span className="project-subtitle">
                (Solo Race Simulation Development Project)
              </span>
            </h3>
            <ul className="entry-description">
              <li>
                Coded a car racing simulation video game in Godot Engine with
                GDScript, creating a replayable gameplay loop and designing
                mechanics.
              </li>
              <li>
                Engineered vehicle dynamics by attaching 3D car models to a ball
                physics system, enabling realistic vehicle movement and unique
                handling.
              </li>
              <li>
                Designed race maps with different track layouts, obstacles, and
                environments to create an engaging player experience.
              </li>
            </ul>
          </div>
        </section>
        {/*skills*/}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="entry">
            <ul className="skill-list">
              <li>Python</li>
              <li>Java</li>
              <li>TBA</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}