import './Home.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from './InfoSection/InfoSection';
import WhyBonsaiSection from './WhyBonasiSection/WhyBonsaiSection';
import ContactSection from "./ContactSection/ContactSection"; // Poprawiono literówkę

const heroData = {
        titlePart1: "Witamy na plantacji",
        titlePart2: "Drzewek Bonsai",
        description: "Drzewka bonsai to wyjątkowe połączenie natury i sztuki. Ich miniaturowa forma, misternie kształtowana przez lata, stanowi nie tylko ozdobę, ale także wyraz cierpliwości i precyzji.",
        buttonText: "kontakt",
        isAnchor: true,
        href: "#kontakt"
};

const Home = () => {
        return (
            <main className="home">
                    <Hero
                        titlePart1={heroData.titlePart1}
                        titlePart2={heroData.titlePart2}
                        description={heroData.description}
                        buttonText={heroData.buttonText}
                        isAnchor={heroData.isAnchor}
                        href={heroData.href}
                    />
                    <InfoSection />
                    <WhyBonsaiSection />
                    <ContactSection />
            </main>
        );
};

export default Home;
