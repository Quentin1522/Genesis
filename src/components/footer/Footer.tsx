import "../footer/footer.scss";
import Form from "../form/Form.tsx";

const Footer = () => {
    return (
        <div className="wrapperFooter">

            <div className="me">
                <p>X<a href=""></a></p>
                <p>Linkedin<a href=""></a></p>
                <p>Portfolio<a href=""></a></p>
            </div>

            <Form/>
        </div>
    );
};

export default Footer;