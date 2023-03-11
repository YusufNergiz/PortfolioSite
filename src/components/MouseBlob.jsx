import React, { useEffect, useRef } from 'react'
import styles from "./styles.module.css";

function MouseBlob() {

    const mouseBlobRef = useRef();

    useEffect(() => {
        const blob = mouseBlobRef.current

        document.body.onpointermove = event => {
            const { clientX, clientY } = event;

            blob.animate({
              left: `${clientX}px`,
              top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" })

            blob.style.left = `${clientX}px`;
            blob.style.top = `${clientY}px`;
        }
    }, [])

  return (
    <div className={styles.mouseBlob} ref={mouseBlobRef}>

    </div>
  )
}

export default MouseBlob