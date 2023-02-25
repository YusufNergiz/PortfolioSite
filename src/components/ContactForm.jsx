import React, { useRef } from "react";
import styles from "./styles.module.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactForm = () => {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_81218il', 'template_ujda4jm', formRef.current, '1aWMNSXaeaZLDS7Rz')
            .then((result) => {
                toast.success("Your Email Has been Successfully Sent!");
                formRef.current.reset();
            }, (error) => {
                toast.error("Oops, email has not been sent, please reach out to me via Linkedin or @ yusufyn04@gmail.com")
            });
    }

    return (
        <div className={styles.contactFormContainer}>
            <h1>Feel free to contact Me ↓.</h1>
            <form className="d-flex flex-column" ref={formRef} onSubmit={sendEmail}>
                <div className="row">
                    <input type="text" placeholder="Name" className={`col-6`} name="from_name"/>
                    <input type="email" placeholder="Email" className={`col-6`} name="from_email"/>
                </div>
                <input type="text" placeholder="Subject"/>
                <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                <input type="submit" value="Send" className={styles.sendEmailButton}/>
            </form>
        </div>
    );
}

export default ContactForm;