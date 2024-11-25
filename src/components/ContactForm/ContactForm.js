import './ContactForm.scss'
import Button from "../Button/Button";

const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="contact-form__container">
                <input className="contact-form__input" type="text" name="name" placeholder="Imie"/>
                <input className="contact-form__input" type="text" name="email" placeholder="E-mail"/>
                <input className="contact-form__input" type="number" name="telephoneNumber" placeholder="+48 123 123 123"/>
            </div>
            <textarea className="contact-form__area" name="message" placeholder="Wiadomość"/>
            <Button className="contact-form__button" buttonText="Prześlij" type="submit">Submit</Button>
        </form>
    )
};
export default ContactForm;