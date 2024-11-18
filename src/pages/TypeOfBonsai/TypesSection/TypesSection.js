import './TypesSection.scss'
import Container from '../../../components/Container/Container'
import SingleBonsai from "./SingleBonsai/SingleBonsai";
import treeData from "../treeData";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const TypesSection = () =>{
    console.log(treeData);
    return (
            <section className="TypesSection">
                <Container className="TypesSection__container">
                    {Object.values(treeData).map((tree, index) => {
                        let style = '';
                        if (index % 2 !== 0) {
                            style = 'SingleBonsai__left';
                        }
                        return ( // Musisz użyć `return`, aby zwrócić JSX
                            <SingleBonsai
                                key={index}
                                img={tree.img}
                                title={tree.title}
                                description={tree.description}
                                className={style} // Zakładam, że `className` jest wspierany w `SingleBonsai`
                            />
                        );
                    })}
                </Container>
            </section>
    )
}

export default TypesSection;