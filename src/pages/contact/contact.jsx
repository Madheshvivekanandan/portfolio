import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './contact.css';
export default function Contact() {
    return (
        <div className="contact-page">
            <Navbar />
            <h1 className="section-heading">Contact Me</h1>
            <form className="contact-form">
                <label>Name:</label>
                <input type="text" placeholder="Name" required/>
                <label>Email:</label>
                <input type="email" placeholder="Email" required />
                <label>Message:</label>
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <Footer />
        </div>
    )
}