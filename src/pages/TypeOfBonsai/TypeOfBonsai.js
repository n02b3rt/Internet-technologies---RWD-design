import './TypeOfBonsai.scss'
import Hero from "../../components/Hero/Hero";
import TypesSection from "./TypesSection/TypesSection";

const heroData = {
    titlePart1: "Rodzaje",
    titlePart2: "Drzewek Bonsai",
    description: "Drzewka bonsai to wyjątkowe połączenie natury i sztuki. Ich miniaturowa forma, misternie kształtowana przez lata, stanowi nie tylko ozdobę, ale także wyraz cierpliwości i precyzji.",
};

const TypeOfBonsai = () => {
  return (
      <main className="typeOfBonsai">
          <Hero
              titlePart1={heroData.titlePart1}
              titlePart2={heroData.titlePart2}
              description={heroData.description}
              />
          <TypesSection/>
      </main>
  );
};

export default TypeOfBonsai;