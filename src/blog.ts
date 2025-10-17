//define typescript type: "Blog"
type Blog = {
    title: string;
    date: string;
    description: string;
    image: string; //ex "./images/abc.png"
    imageAlt: string; //describes an image
    slug: string; //url name used to redirect to a specific page
};

//list of Blog objects
const blogs: Blog[] = [
    {   
        //blog object 1
        title: "Iced Matcha Latte Recipe",
        date: "10-10-2025",
        description: "A quick recipe for an iced matcha latte ★",
        image: "/Users/angelma/bootcamp-project-2025/oops.png",
        imageAlt: "this is an image",
        slug: "iced-matcha-latte-recipe",
    },
    {   
        //blog object 2
        title: "Strawberry Milk Recipe",
        date: "10-16-2025",
        description: "planning costume ideas",
        image: "/Users/angelma/bootcamp-project-2025/strawberrymilk.png",
        imageAlt: "this is an image",
        slug: "strawberry-milk-recipe",
    },
  ];

//container for where new Blog elements will be inserted in
//accessed via 'blog-container' in blog.html
const blogContainer = document.getElementById('blog-container');

//function to iterate over a list of blogs
//.forEach is a built-in function that allows us to iterate over a list of blogs
//it also allows us to access the attributes of blog
blogs.forEach((blog) => {
    //create blog elements
    const image = document.createElement("img"); //specific code section from https://www.notion.so/h4i/Milestone-1-246197abf07b8121a166efd2a9d34fbf#246197abf07b812fbf33c1ffb0a1d35c
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("h2");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const post = document.createElement("div");
    post.className = "post"; //created for styling purposes
    
    //append elements into post
    post.append(image, title, date, description);
    //append post to blogcontainer if exists
    blogContainer?.append(post);
})