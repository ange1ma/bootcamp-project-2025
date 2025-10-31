import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function Blogs() {
  return (
    <main>
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
      </div>
    </main>
  )
}