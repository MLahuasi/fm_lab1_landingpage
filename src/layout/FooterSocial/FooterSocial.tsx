import "./footer-social.css";

interface FooterSocialProps {
    href: string;
    src: string;
}

export const FooterSocial = ({ href, src }: FooterSocialProps) => {
    return (
        <a href={href} className="footer__link">
            <img src={src} className="footer__icon" />
        </a>
    )
}
