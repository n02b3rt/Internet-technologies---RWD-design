import "./Card.scss"

const Card = ({ title, description, photo }) => {
    return (
        <section className="Card">
            <img src={photo} className="Card__icon" alt={title} />
            <h3 className="Card__title">{title}</h3>
            <p className="Card__description">{description}</p>
        </section>
    );
};

export default Card;
