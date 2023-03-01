import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import {FaUsers, FaWindowRestore, FaUserFriends, FaXRay} from "react-icons/fa"
import gsap, { Power4 } from "gsap";
import GithubRepo from "./GithubRepo";
import ScrollTrigger from "gsap/ScrollTrigger";

const GithubStats = () => {

    const [githubData, setGithubData] = useState();
    const [githubRepos, setGithubRepos] = useState();

    const [page, setPage] = useState(1);

    const containerRef = useRef();
    const repoRef = useRef();

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
        page: page
    })

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const fetchGithubData = async () => {
            await axios.get(`https://api.github.com/users/yusufnergiz/repos?${params}`)
                .then(response => {
                    setGithubRepos(response.data)
                })
                .catch(error => {
                    toast.error("Could not fetch Github Data!")
                })

            await axios.get(`https://api.github.com/users/yusufnergiz`)
                .then(response => {
                    setGithubData(response.data)
                })
                .catch(error => {
                    toast.error("Could not fetch Github Data!")
                })
        }

        fetchGithubData()

        const ctx = gsap.context(() => {
            gsap.from("#githubAvatar", {
                y: "-100vh",
                opacity: 0,
                duration: 3,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    scroller: "#main-container",
                }
            })

            gsap.from("#githubInfoWrapper", {
                y: "-100vh",
                opacity: 0,
                duration: 3,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    scroller: "#main-container",
                }
            })

            gsap.from("#githubReposInfo", {
                x: "100vh",
                opacity: 0,
                duration: 3,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    scroller: "#main-container",
                }
            })
        }, containerRef)

        return () => ctx.revert();

    }, [])

    return (
        <>
            <div className={`${styles.container}`} ref={containerRef} style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
                <div className={`row ${styles.githubInfoContainer}`}>
                    <div className="col-12 col-md-4">
                        <img src={githubData && githubData.avatar_url} alt="Profile Picture" className={styles.githubAvatar} id="githubAvatar"/>
                    </div>
                    <div className="col-12 col-md-4" id="githubInfoWrapper">
                        <h1>{githubData && githubData.name}</h1>
                        <p>{githubData && githubData.bio}</p>
                        <a href="https://github.com/YusufNergiz" target="_blank"><button className={styles.githubButton} role="button" ><span className={styles.text}>Check out my Github Page</span><span>Yusuf Nergiz</span></button></a>
                        <div className={styles.githubLocationContainer}>
                            <h5>📍  {githubData && githubData.location}</h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column" id="githubReposInfo">
                        <div className={styles.githubStats}>
                            <h5>FOLLOWERS</h5>
                            <h1>{githubData && githubData.followers}  <FaUserFriends /></h1>
                        </div>
                        <div className={styles.githubStats}>
                            <h5>FOLLOWING</h5>
                            <h1>{githubData && githubData.following}  <FaUsers /></h1>
                        </div>
                        <div className={styles.githubStats}>
                            <h5>PUBLIC REPOS</h5>
                            <h1>{githubData && githubData.public_repos} <FaWindowRestore /></h1>
                        </div>
                        <div className={styles.githubStats}>
                            <h5>PUBLIC GISTS</h5>
                            <h1>{githubData && githubData.public_gists}  <FaXRay /></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: "250vh", background: "#212121"}} className="d-flex justify-content-center align-items-center flex-column" ref={repoRef}>
                {githubRepos ? (
                    githubRepos.map(repo => (
                        <GithubRepo name={repo.name} description={repo.description} html_url={repo.html_url} key={repo.name} stargazersCount={repo.stargazers_count} watchersCount={repo.watchers_count} forks={repo.forks}/>
                    ))
                    ) : (
                        <p>Loading Github Repos...</p>
                    )}
            </div>
        </>
    );
}

export default GithubStats;