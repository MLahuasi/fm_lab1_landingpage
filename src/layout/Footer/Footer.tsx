import { Button, Input } from "../../components";
import { FooterContact, FooterSocial } from "..";
import "./footer.css";

import footer__logo from "../../assets/images/logo-white.svg";
import icon__phone from "../../assets/images/icon-phone.svg";
import icon__email from "../../assets/images/icon-email.svg";
import icon__fb from "../../assets/images/fb.svg";
import icon__instagram from "../../assets/images/instagram.svg";
import icon__twitter from "../../assets/images/twitter.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* Formulario */}
                <section className="footer__newsletter">
                    <h2 className="footer__title">Newletter</h2>
                    <p className="footer__paragraph footer__paragraph--newsletter">
                        To recieve tips on how to grow your community, sing up to our weekly newsletter. We'll never send you spam or pass on your email address
                    </p>
                    <form action="" className="footer__form">
                        <Input type="email" className="footer__input" />
                        <Button title={"Subscribe"} href={"#"} className={"footer__cta"} />
                    </form>
                </section>
                {/* Datos contacto */}
                <section className="footer__content">
                    <img src={footer__logo} className="footer__logo" />
                    <p className="footer__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque possimus quo cupiditate corporis facere dolorem, maxime doloribus animi incidunt molestiae, aperiam libero, fugiat enim? Ab vel quia iste. Iure, adipisci!</p>

                    <FooterContact src={icon__phone} customStyle={"none"} />
                    <FooterContact src={icon__email} customStyle={"footer__contact--email"} />

                    <div className="footer__social">
                        <FooterSocial href={"#"} src={icon__fb} />
                        <FooterSocial href={"#"} src={icon__instagram} />
                        <FooterSocial href={"#"} src={icon__twitter} />
                    </div>
                </section>
            </div>
        </footer>
    )
}
