type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Iced Matcha Latte Recipe",
        date: "10-10-2025",
        description: "A quick recipe for an iced matcha latte ★",
        image: "/Users/angelma/bootcamp-project-2025/oops.png",
        imageAlt: "this is an image",
        slug: "iced-matcha-latte-recipe",
    },
    {
        title: "Strawberry Milk Recipe",
        date: "10-16-2025",
        description: "planning costume ideas",
        image: "/Users/angelma/bootcamp-project-2025/strawberrymilk.png",
        imageAlt: "this is an image",
        slug: "strawberry-milk-recipe",
    },
  ];

  const blogContainer = document.getElementById('blog-container');

  blogs.forEach((blog) => {
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("h2");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const post = document.createElement("div");
    post.className = "post";
    
    post.append(image, title, date, description);
    blogContainer?.append(post);
  })