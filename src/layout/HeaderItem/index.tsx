import "./index.css";

interface HeaderCounterProps {
    src: string;
    number: string;
    text: string;
}
export const HeaderCounter = ({ src, number, text }: HeaderCounterProps) => {
    return (
        <div className="header__item">
            <img src={src} alt="" className="header__icon" />
            <h3 className="header__number">{number}</h3>
            <p className="header__community">{text}</p>
        </div>
    )
}
