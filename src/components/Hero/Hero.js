import './Hero.scss'
import Button from '../Button/Button'
import Container from '../Container/Container'

const Hero = ({titlePart1, titlePart2, description, buttonText, isAnchor, href}) => {
    return(
        <section className="hero">
            <div className="hero__leftSide">
                <Container className="hero__container">
                <h1>
                    <span className="hero__title hero__title--1">{titlePart1}</span>
                    <br/>
                    <span className="hero__title hero__title--2">{titlePart2}</span>
                </h1>
                {description && <p className="hero__description">{description}</p>}
                {buttonText && <Button buttonText={buttonText} href={href} isAnchor={isAnchor} />}
            </Container>
            </div>
            <div className="hero__rightSide"></div>
        </section>
    );
}

export default Hero;