import "./index.css";

interface ButtonProps {
    title: string;
    href: string;
    className: "cta" | "header__cta" | "footer__cta";
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Button = ({ title, href, className, onClick }: ButtonProps) => {
    return (
        <a href={href} className={className} onClick={onClick}>{title}</a>
    )
}
