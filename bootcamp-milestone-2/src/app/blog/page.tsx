import Navbar from "@/components/navbar";
import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function Blog() {
  return (
    <main>
      <Navbar/>
      <h1 className="page-title">Blog</h1>
      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.title}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
        <p>This is my blog!</p>
      </div>
      <footer className="footer">
        © 2025 Angel's Personal Website | All Rights Reserved
      </footer>
    </main>
  )
}