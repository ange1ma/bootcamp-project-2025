import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <main>
      <Navbar/>
      <h1 className="page-title">Blog</h1>
      <div id="blog-container">
        <p>This is my blog!</p>
      </div>
      <footer className="footer">
        © 2025 Angel's Personal Website | All Rights Reserved
      </footer>
    </main>
  )
}