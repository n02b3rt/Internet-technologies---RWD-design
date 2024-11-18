import './WhyBonsaiSection.scss';
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Card from "../../../components/Card/Card";
import ikona1 from "../../../assets/ikona1.webp"
import ikona2 from "../../../assets/ikona2.webp"
import ikona3 from "../../../assets/ikona3.webp"

const CardData = {
    1: {
        title: "Redukcja stresu",
        photo: ikona1, // Podaj właściwą nazwę pliku
        description: "Pielęgnacja bonsai pomaga się wyciszyć i skupić.",
    },
    2: {
        title: "Satysfakcja z tworzenia",
        photo: ikona2, // Podaj właściwą nazwę pliku
        description: "Kształtowanie bonsai to twórczy proces, który daje wiele radości i poczucia dumy.",
    },
    3: {
        title: "Estetyka i harmonia",
        photo: ikona3, // Podaj właściwą nazwę pliku
        description: "Pielęgnacja bonsai pomaga się wyciszyć i skupić.",
    },
};

const WhyBonsaiSection = () => {
    return (
        <section className="whyBonsai">
            <Container className="whyBonsai__container">
                <SectionTitle
                    className="whyBonsai__title"
                    titlePart1="Dlaczego"
                    titlePart2="Warto wybrać Bonsai?" />
                <Container className="whyBonsai__cardContainer">
                    <Card
                        title={CardData[1].title}
                        description={CardData[1].description}
                        photo={CardData[1].photo}
                    />
                    <Card
                        title={CardData[2].title}
                        description={CardData[2].description}
                        photo={CardData[2].photo}
                    />
                    <Card
                        title={CardData[3].title}
                        description={CardData[3].description}
                        photo={CardData[3].photo}
                    />
                </Container>
            </Container>
        </section>
    );
};

export default WhyBonsaiSection;
