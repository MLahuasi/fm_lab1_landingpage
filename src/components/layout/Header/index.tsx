import "./index.css";
import logo from "../../../assets/images/logo.svg";
import screen_mockups from "../../../assets/images/screen-mockups.svg";
import icon_communities from "../../../assets/images/icon-communities.svg";
import icon_messages from "../../../assets/images/icon-messages.svg";
import { HeaderCounter } from "..";

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav container">
                {/* Logo */}
                <figure className="header__logo">
                    <img src={logo} alt="" className="hero__huddle" />
                </figure>
                {/* Botón */}
                <a href="#" className="header__cta">Try it free</a>
            </nav>

            {/* Titulo Parrafo Boton Imagen Contadores */}
            <section className="hero__main container">
                <div className="hero__texts">
                    {/* Titulo */}
                    <h1 className="header__title">Build The Community Your Fans Will Love</h1>
                    {/* Parrafo */}
                    <p className="header__paragraph">Huddle re-imagines the way build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discusion.</p>
                    {/* Botón */}
                    <a href="#" className="cta">Get Started For Free</a>
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
        </header>
    )
}

// 