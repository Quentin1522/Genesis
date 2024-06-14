import Logo from "../../assets/Logo.png";
import "../header/header.scss";
import Me from "../me/Me.tsx";

const header = () => {
    return (
        <div className="headerWrapper">

            <div className="header">
                <img className="logo" src={Logo} alt='logo Genesis'/>

                <div className="menu">
                    <ul>
                        <li>Créations</li>
                        <li>Tarifs</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="title">
                <Me/>
            </div>
        </div>
    );
};

export default header;