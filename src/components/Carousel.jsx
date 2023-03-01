import React from 'react'
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import innLab from "../images/innLab-mainPage.PNG"
import alemMed from "../images/alemmed-mainPage.PNG";
import mazmun from "../images/mazmun-mainPage.png";
import mugalim from "../images/mugalim-mainPage.PNG";
import ytbClone from "../images/ytbClone.PNG";


function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

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

  return (
    <div className={styles.carouselContainerProjects}>
        <div className={styles.projectContainerProjects}>
            <Slider {...settings}>
                {projectList.map((project, index) => (
                    <a href={project.url} target="_blank" rel="noreferrer" key={index}>
                        <div className={styles.project}>
                        <h1 className='mt-5'>{project.title}</h1>
                        <img src={project.image} alt="Project" />
                    </div>
                    </a>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Carousel