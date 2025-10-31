import React from 'react';
import style from './blogPreview.module.css';
import Image from "next/image";
import { Blog } from "../app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
				<Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>Posted on {props.date}</p>
      </div>
	  </div>
  );
}