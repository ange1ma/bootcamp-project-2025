var blogs = [
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
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var date = document.createElement("h2");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var post = document.createElement("div");
    post.append(image, title, date, description);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(post);
});
