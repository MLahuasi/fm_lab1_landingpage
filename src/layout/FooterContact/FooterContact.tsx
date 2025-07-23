import "./footer-contact.css";

interface FooterContactProps {
    src: string;
    customStyle: "none" | "footer__contact--email";
}
export const FooterContact = ({ src, customStyle }: FooterContactProps) => {
    return (
        <div className={`footer__contact ${customStyle != "none" && customStyle}`}>
            <img src={src} alt="" className="footer__img" />
        </div>
    )
}
