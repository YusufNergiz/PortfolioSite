import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import innLab from "../images/innLab-mainPage.PNG"
import alemMed from "../images/alemmed-mainPage.PNG";
import mazmun from "../images/mazmun-mainPage.png";
import mugalim from "../images/mugalim-mainPage.PNG";
import ytbClone from "../images/ytbClone.PNG";

import {Carousel} from '3d-react-carousal';


const projectList = [
    {
        description: "Built the clone of the Landing page which helped me dive deeper into CSS and HTML",
        url: "https://innlab.kz/page",
        image: innLab,
        title: "Software Company Landing Page",
        stack: ["Angular", "Bootstrap", "HTML", "CSS"]
    },
    {
        description: "Built a University News Site both Front-End and Back-End with admin page",
        url: "https://alemmedicus.kz/main",
        image: alemMed,
        title: "Medical University Scholaship Site",
        stack: ["Angular", "Firebase", "Bootstrap", "HTML", "CSS"]
    },
    {
        description: "Built a Clone of an Online BookStore based in Kazakhstan both Front-End and Back-End with authentication using Fireabase",
        url: "https://github.com/YusufNergiz/Mazmun",
        image: mazmun,
        title: "Online Bookstore",
        stack: ["Angular", "Firebase", "Bootstrap", "HTML", "CSS"]
    },
    {
        description: "Built the Clone of an Academy's Landing Page",
        url: "https://mugalim.academy/",
        image: mugalim,
        title: "Education Center Landing Page",
        stack: ["Angular", "Bootstrap", "HTML", "CSS"]
    },
    {
        description: "Built a Youtube Clone using a non SQL Back-End, MongoDB",
        url: "https://github.com/YusufNergiz/YoutubeClone",
        image: ytbClone,
        title: "Youtube Clone",
        stack: ["React", "Firebase", "Node.js", "Express", "MongoDB", "Bootstrap", "HTML", "CSS"]
    },
]

const Projects = () => {

    let slides = projectList.map((project, index) => (
      <a href={project.url} className={styles.card} target="_blank" key={index}>
        <img src={project.image} className={styles.card__image} alt="" />
        <div className={styles.card__overlay}>
          <div className={styles.card__header}>
            <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <div className={styles.card__header_text}>
              <h3 className={styles.card__title}>{project.title}</h3>            
              {project.stack.map((item, index) => (
                <span className={styles.card__status} key={index}>{item}</span>
              ))}
            </div>
          </div>
          <p className={styles.card__description}>{project.description}</p>
        </div>
    </a>
      ));

    return (
        <>
          <div className={styles.projectWrapper}>
            <Carousel slides={slides} autoplay={true} interval={4000} arrows={false} pauseOnHover={true}/>
          </div>
        </>
    );
}

export default Projects;