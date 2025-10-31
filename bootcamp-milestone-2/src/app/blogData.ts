export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string; //ex "./images/abc.png"
    imageAlt: string; //describes an image
    slug: string; //url name used to redirect to a specific page
}

const blogs: Blog [] = [
    {   
        //blog object 1
        title: "Iced Matcha Latte Recipe",
        date: "10-10-2025",
        description: "A quick recipe for an iced matcha latte ★",
        image: "/mika2.png",
        imageAlt: "this is an image",
        slug: "iced-matcha-latte-recipe",
    },
    {   
        //blog object 2
        title: "Strawberry Milk Recipe",
        date: "10-16-2025",
        description: "A quick recipe for strawberry milk ★",
        image: "/strawberrymilk.png",
        imageAlt: "this is an image",
        slug: "strawberry-milk-recipe",
    }
];

export default blogs;