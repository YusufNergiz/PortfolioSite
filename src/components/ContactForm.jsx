import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactForm = () => {

    const [inputFields, setInputFields] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: ""
    })

    const formRef = useRef();

    const handleChange = (e) => {
        setInputFields(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (Object.values(inputFields).every((field) => field !== "")) {
            emailjs.sendForm('service_81218il', 'template_ujda4jm', formRef.current, '1aWMNSXaeaZLDS7Rz')
            .then((result) => {
                toast.success("Your Email Has been Successfully Sent!");
                formRef.current.reset();
            }, (error) => {
                toast.error("Oops, email has not been sent, please reach out to me via Linkedin or @ yusufyn04@gmail.com")
            });
        }
        else {
            toast.error("Please fill all the input fields!")
        }
    }

    return (
        <div className={styles.contactFormContainer}>
            <h1>Feel free to contact Me ↓.</h1>
            <form className="d-flex flex-column" ref={formRef} onSubmit={sendEmail}>
                <div className="row">
                    <input type="text" placeholder="Name" className={`col-6`} name="from_name" onChange={handleChange}/>
                    <input type="email" placeholder="Email" className={`col-6`} name="from_email" onChange={handleChange}/>
                </div>
                <input type="text" placeholder="Subject" onChange={handleChange} name="subject"/>
                <textarea name="message" id="" cols="30" rows="5" placeholder="Message" onChange={handleChange}></textarea>
                <input type="submit" defaultValue="Send" className={styles.sendEmailButton}/>
            </form>
        </div>
    );
}

export default ContactForm;