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
        title: "hello world!",
        date: "10-10-2025",
        description: "first blog ever",
        image: "file path for image",
        imageAlt: "this is an image",
        slug: "hello-world",
    },
    {
        title: "grwm for halloween",
        date: "10-15-2025",
        description: "planning costume ideas",
        image: "file path for image",
        imageAlt: "this is an image",
        slug: "grwm-for-halloween",
    },
  ];

  const blogContainer = document.getElementById('blog=container');

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

    post.append(image, title, date, description);
    blogContainer?.append(post);
  })