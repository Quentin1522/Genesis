import Logo from "../../assets/Logo.png";
import "../header/header.scss";

const header = () => {
    return (
        <div className="headerWrapper">
            <img className="logo" src={Logo} alt='logo Genesis'/>

            <div className="menu">
                <ul>
                    <li>
                        Créations
                    </li>
                    <li>
                        Tarifs
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default header;