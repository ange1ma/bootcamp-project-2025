var blogs = [
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
        description: "A quick, budget-friendly recipe for strawberry milk!",
        image: "/Users/angelma/bootcamp-project-2025/strawberrymilk.png",
        imageAlt: "this is an image",
        slug: "strawberry-milk-recipe",
    },
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var link = document.createElement("a");
    link.href = `./blogs/${blog.slug}.html`;
    link.className = "blog-link";
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
    post.className = "post";
    link.append(title);
    post.append(link, image, date, description);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(post);
});
