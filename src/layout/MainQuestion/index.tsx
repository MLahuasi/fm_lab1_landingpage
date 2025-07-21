import { Button } from "../../components";
import "./index.css";

interface MainQuestionProps {
    subtitle: string;
    href: string;
    title: string;
}
export const MainQuestion = ({ subtitle, href, title }: MainQuestionProps) => {
    return (
        <section className="question">
            <div className="question__texts container">
                <h2 className="subtitle">{subtitle}</h2>
            </div>
            <Button title={title} href={href} className={"cta"} />

            {/* Ola en Background */}
            <div className="wave wave--top"></div>
            <div className="wave wave--bottom"></div>
        </section>
    )
}
