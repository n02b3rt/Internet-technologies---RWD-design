import './Gallery.scss'
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";

import photo1 from "../../assets/Gallery/arnaud-berthomier-SMbW_DyXGf4-unsplash.webp";
import photo2 from "../../assets/Gallery/carlos-gonzalez-31IcHku4g30-unsplash.webp";
import photo3 from "../../assets/Gallery/dario-bertolino-MQIRaF7SEyc-unsplash.webp";
import photo4 from "../../assets/Gallery/davide-cantelli-ajisKc2uuFk-unsplash.webp";
import photo5 from "../../assets/Gallery/devin-h-PAEwrnasOvY-unsplash.webp";
import photo6 from "../../assets/Gallery/jesus-arango-iOL0MsrTtrU-unsplash.webp";
import photo7 from "../../assets/Gallery/katy-t_Oxcbm12Vw-unsplash.webp";
import photo8 from "../../assets/Gallery/mark-tegethoff-TYUS-cXzy50-unsplash.webp";
import photo9 from "../../assets/Gallery/sarah-dorweiler-KcufLkTXYy4-unsplash.webp";
import photo10 from "../../assets/Gallery/toa-heftiba-W1yjvf5idqA-unsplash.webp";

const heroData = {
    titlePart1: "Galeria",
    titlePart2: "Drzewek Bonsai",
};

const Gallery = () => {
    return (
        <main className="Gallery">
            <Hero
                titlePart1={heroData.titlePart1}
                titlePart2={heroData.titlePart2}
            />
            <Container className='Gallery__container'>
                <img src={photo1} className={'Gallery__photo Gallery__photo--1'} alt={'test'}/>
                <img src={photo2} className={'Gallery__photo Gallery__photo--2'} alt={'test'}/>
                <img src={photo3} className={'Gallery__photo Gallery__photo--3'} alt={'test'}/>
                <img src={photo4} className={'Gallery__photo Gallery__photo--4'} alt={'test'}/>
                <img src={photo5} className={'Gallery__photo Gallery__photo--5'} alt={'test'}/>
                <img src={photo6} className={'Gallery__photo Gallery__photo--6'} alt={'test'}/>
                <img src={photo7} className={'Gallery__photo Gallery__photo--7'} alt={'test'}/>
                <img src={photo8} className={'Gallery__photo Gallery__photo--8'} alt={'test'}/>
                <img src={photo9} className={'Gallery__photo Gallery__photo--9'} alt={'test'}/>
                <img src={photo10} className={'Gallery__photo Gallery__photo--10'} alt={'test'}/>
            </Container>
        </main>
    );
}

export default Gallery;