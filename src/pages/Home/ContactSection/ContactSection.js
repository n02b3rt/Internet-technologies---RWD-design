import './ContactSection.scss'
import Container from "../../../components/Container/Container";
import ContactForm from "../../../components/ContactForm/ContactForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactSection = ({id}) => {
    return (
        <section id={id} className="ContactSection">
            <Container className="ContactSection__container">
                <ContactForm></ContactForm>
                <div className="ContactSection__content">
                    <SectionTitle
                        titlePart1="Masz jakieś pytania"
                        titlePart2="Napisz do nas!"
                    ></SectionTitle>
                    <p className="ContactSection__content__description">
                        Chcesz dowiedzieć się więcej o pielęgnacji bonsai? A może masz pytania dotyczące wyboru odpowiedniego drzewka? Skontaktuj się z nami!
                    </p>
                    <p className="ContactSection__content__description">
                        📧 E-mail: kontakt@bonsaiart.pl<br/>
                        📞 Telefon: +48 123 456 789
                    </p>
                    <p className="ContactSection__content__description">
                        Jesteśmy dostępni od poniedziałku do piątku, w godzinach 9:00 - 17:00. Chętnie pomożemy Ci na każdym etapie przygody z bonsai!
                    </p>
                </div>
            </Container>
        </section>
    )
};

export default ContactSection;