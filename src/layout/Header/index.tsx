/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderCounter } from "..";
import { Button } from "../../components";
import "./index.css";
import logo from "../../assets/images/logo.svg";
import screen_mockups from "../../assets/images/screen-mockups.svg";
import icon_communities from "../../assets/images/icon-communities.svg";
import icon_messages from "../../assets/images/icon-messages.svg";
// Ondas
import bg_section_top_mobile_1 from "../../assets/images/bg-section-top-mobile-1.svg";


export const Header = () => {
    return (
        <header className="header"
            style={{
                ['--wave-bottom' as any]: `url(${bg_section_top_mobile_1})`
            }}>
            <nav className="header__nav container">
                {/* Logo */}
                <figure className="header__logo">
                    <img src={logo} alt="" className="header__huddle" />
                </figure>
                {/* Botón */}
                <Button title={"Try It Free"} href={"#"} className={"header__cta"} />
            </nav>

            {/* Titulo Parrafo Boton Imagen Contadores */}
            <section className="header__main container">
                <div className="header__texts">
                    {/* Titulo */}
                    <h1 className="header__title">Build The Community Your Fans Will Love</h1>
                    {/* Parrafo */}
                    <p className="header__paragraph">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discusion.</p>
                    {/* Botón */}
                    <Button title={"Get Started For Free"} href={"#"} className={"cta"} />
                </div>
                {/* Imagen */}
                <figure className="header__picture">
                    <img src={screen_mockups} alt="" className="header__img" />
                </figure>
                {/* Contadores */}
                <footer className="header__numbers">
                    <HeaderCounter src={icon_communities} number={"1.4k+"} text={"Comminities Formed"} />
                    <HeaderCounter src={icon_messages} number={"2.7m+"} text={"Messages Sent"} />
                </footer>
            </section>

            {/* Ola en Background */}
            <div className="wave wave--bottom"></div>
        </header>
    )
}

// 