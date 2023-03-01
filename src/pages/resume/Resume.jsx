import React from 'react'
import resumePDF from "../../images/YussufNergizResume.pdf";
import styles from "./styles.module.css";

function Resume() {
  
  const downloadResume = () => {
    window.open(resumePDF)
  }

  return (
    <>
      <div className={styles.resume}>
        <iframe src={resumePDF} title="Resume"></iframe>
      </div>
      <div className={styles.mobileResume}>
        <h1>Click to Download the Resume,</h1>
        <h3>Please use a laptop/PC to view the Resume as a pdf.</h3>
        <button onClick={downloadResume} className={styles.button}>Download</button>
      </div>
    </>
  )
}



export default Resume