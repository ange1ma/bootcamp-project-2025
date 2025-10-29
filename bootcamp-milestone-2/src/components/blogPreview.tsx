import React from 'react';
import style from './blogPreview.module.css';
import Image from "next/image";

export default function BlogPreview() {
  return (
    <div className={style.div}>
      <h3>Iced Matcha Latte Recipe</h3>
      <div>
				<Image src="./oops.png" alt="img" width={500} height={500} ></Image>
        <p>A quick recipe for an iced matcha latte ★</p>
				<p>Posted on 10-10-2025</p>
      </div>
      <h3>Strawberry Milk Recipe</h3>
      <div>
        <Image src="./strawberrymilk.png" alt="img" width={500} height={500}/>
        <p>A quick, budget-friendly recipe for strawberry milk!</p>
        <p>Posted on 10-16-2025</p>
      </div>
	  </div>
  );
}