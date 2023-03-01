import React from 'react'
import Carousel from '../../components/Carousel';
import styles from "./styles.module.css";

function Tv() {

  const handleClick = () => {
    window.location.href = "/projects";
  }

  return (
    <>
<div className={styles["wood-floor"]}></div>
<div className={styles["old-tv"]}>
  <div className={styles.antenna}></div>
  <main>
    <div className={styles["error-noise"]}>
      <div className={styles["error-effect"]}>
        <div className={styles["old-tv-content"]}>
            <Carousel />
        </div>
      </div>
    </div>
  </main>
  <div className={styles.speaker}></div>
  <div className={styles.volume}>
    <input type="range" min="0" max="100"/>
  </div>
  <nav className={styles.channel}>
    <input type="range" min="0" max="100"/>
  </nav>
  <nav className={styles.power}>
    <button onClick={handleClick}></button>
  </nav>
  <nav></nav>
  <footer></footer>
</div>
    </>
  )
}

export default Tv;