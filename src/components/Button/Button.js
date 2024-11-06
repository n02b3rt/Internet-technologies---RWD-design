import './Button.scss'
import {Link} from "react-router-dom";

const Button = ({isAnchor, href, buttonText}) => {
    if (isAnchor) {
        return (
            <button className="button" onClick={() => window.location.hash = href}>
                {buttonText}
            </button>
        );
    }
    return (
        <Link className="button" to={href}>{buttonText}</Link>
    );
}

export default Button;