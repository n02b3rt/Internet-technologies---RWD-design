import './TypeOfBonsai.scss'
import Hero from "../../components/Hero/Hero";
import TypesSection from "./TypesSection/TypesSection";
import {useEffect} from "react";

const heroData = {
    titlePart1: "Rodzaje",
    titlePart2: "Drzewek Bonsai",
    description: "Drzewka bonsai to wyjątkowe połączenie natury i sztuki. Ich miniaturowa forma, misternie kształtowana przez lata, stanowi nie tylko ozdobę, ale także wyraz cierpliwości i precyzji.",
};

const TypeOfBonsai = () => {
    useEffect(() => {
        document.title = "Rodzaje - Bonsai.pl"; // Ustaw nazwę strony
    }, []);
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