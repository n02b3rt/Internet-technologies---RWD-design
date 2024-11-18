import "./infoSection.scss"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import img1 from "../../../assets/infosection-photo-1.webp";
import img2 from "../../../assets/infosection-photo-2.webp";

const InfoSection = ({id}) =>{
    return (
        <section id={id} className="info-section">
            <Container className="info-section__container">
                <div className="info-section__content">
                    <SectionTitle
                        className="info-section__title"
                        titlePart1="Co to jest"
                        titlePart2="Bonsai"
                    ></SectionTitle>
                    <p className="info-section__content__description">
                        Bonsai, pochodzące z Chin i rozwinięte w Japonii, to starożytna sztuka kształtowania drzewek w
                        miniaturową formę, która odzwierciedla pełnowymiarowe drzewa. To połączenie precyzyjnej
                        pielęgnacji, cierpliwości i kreatywności, które tworzy wyjątkowe kompozycje naturalne. Bonsai
                        symbolizuje harmonię między człowiekiem a naturą, a każdy egzemplarz jest unikalnym dziełem
                        sztuki, kształtowanym przez lata.
                    </p>
                    <Button isAnchor={false} href={"/pages"} buttonText="Zobacz rodzaje"></Button>
                </div>
                <div className="info-section__photos">
                    <img src={img1} className="info-section__photos--1" alt="bonsai" />
                    <div className="info-section__photos__background"></div>
                    <img src={img2} className="info-section__photos--2" alt="bonsai" />
                </div>
            </Container>
        </section>
    )
};

export default InfoSection;