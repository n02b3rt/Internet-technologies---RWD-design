import './ContactForm.scss'
import Button from "../Button/Button";

const ContactForm = () => {
    return (
        <form className="contact-form">
            <input className="contact-form__input" type="text" name="name" placeholder="Name" />
            <input className="contact-form__input" type="text" name="email" placeholder="Email" />
            <input className="contact-form__input" type="number" name="telephoneNumber" placeholder="+48" />
            <textarea className="contact-form__area" type="text" name="message" placeholder="Message" />
            <Button className="contact-form__button" buttonText="Prześlij" type="submit">Submit</Button>
        </form>
    )
};
export default ContactForm;