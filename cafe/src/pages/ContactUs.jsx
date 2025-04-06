import React, { useState } from "react";
import './pagesCSS/ContactUs.css'

function ContactUs() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9a26536a-fe21-4fe8-aa80-106afbbb31d2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contactUs">
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit} id="form">
                <section>
                    <input type="hidden" name="access_key" value="9a26536a-fe21-4fe8-aa80-106afbbb31d2" />
                </section>
                <section>
                    <p>Name: </p>
                    <input type="text" name="name" required />
                </section>

                <section>
                    <p>Email: </p>
                    <input type="email" name="email" required />
                </section>

                <section>
                    <p>Message: </p>
                    <textarea name="message" required></textarea>
                </section>

                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button type="submit">Submit Form</button>
            </form>
            <div id="result">{result}</div>
        </section>
    );
}

export default ContactUs;
