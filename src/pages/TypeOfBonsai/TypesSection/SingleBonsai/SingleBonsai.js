import './SingleBonsai.scss'

const SingleBonsai = ({className='',img,title,description}) => {
    return (
        <div className={`SingleBonsai ${className}`}>
            <img src={img} alt="Drzewko Bonsai Galeria" className="SingleBonsai__img"/>
            <div className="SingleBonsai__title">{title}</div>
            <div className="SingleBonsai__description">{description}</div>
        </div>
    )
}

export default SingleBonsai;