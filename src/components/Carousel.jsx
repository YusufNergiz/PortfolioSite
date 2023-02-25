import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import youtubeClone from "../images/ytbClone.PNG";
import alemMedicus from "../images/alemmed-mainPage.PNG";
import mazmun from "../images/mazmun-mainPage.png";
import mugalim from "../images/mugalim-mainPage.PNG";
import innLab from "../images/innLab-mainPage.PNG";
import { useNavigate } from "react-router-dom";

const Carousel = () => {

    const trackRef = useRef(null);
    const imageRef = useRef();

    const navigate = useNavigate();

    const [projects, setProjects] = useState([{image: youtubeClone, link: "https://github.com/YusufNergiz/YoutubeClone"}, {image: alemMedicus, link: "https://alemmedicus.kz/main"}, {image: mazmun, link: "https://github.com/YusufNergiz/Mazmun"}, {image: mugalim, link: "https://github.com/YusufNergiz/Mugalim-Academy"}, {image: innLab, link: "https://innlab.kz/page"}])

        const handleOnDown = e => {
            trackRef.current.dataset.mouseDownAt = e.clientX;
        };

        const handleOnUp = () => {
            trackRef.current.dataset.mouseDownAt = "0";
            trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage;
        };

        const handleOnMove = e => {
            if (trackRef.current.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(trackRef.current.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            trackRef.current.dataset.percentage = nextPercentage;

            trackRef.current.animate({
            transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of trackRef.current.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
            }
        };

        useEffect(() => {
            window.onmousedown = e => handleOnDown(e);
            window.ontouchstart = e => handleOnDown(e.touches[0]);
            window.onmouseup = e => handleOnUp(e);
            window.ontouchend = e => handleOnUp(e.touches[0]);
            window.onmousemove = e => handleOnMove(e);
            window.ontouchmove = e => handleOnMove(e.touches[0]);

            return () => {
            window.onmousedown = null;
            window.ontouchstart = null;
            window.onmouseup = null;
            window.ontouchend = null;
            window.onmousemove = null;
            window.ontouchmove = null;
            };
        }, []);

        const openProjectLink = (link) => {
            window.open(link, "_blank")
        }

    return (
        <>
            <div ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0" className={styles.imageTrack}>
                {projects.map(project => (
                    <img className={`${styles.carouselImage} image`} ref={imageRef} src={project.image} draggable="false" onClick={() => openProjectLink(project.link)}/>
               ))}
            </div>
        </>
    );
}

export default Carousel;