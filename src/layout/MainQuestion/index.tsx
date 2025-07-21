import { Button, WaveSection } from "../../components";
import "./index.css";
// ondas
import waveTop from "../../assets/images/bg-section-bottom-mobile-2.svg";
import waveBottom from "../../assets/images/bg-footer-top-mobile.svg";

interface MainQuestionProps {
    subtitle: string;
    href: string;
    title: string;
}
export const MainQuestion = ({ subtitle, href, title }: MainQuestionProps) => {

    return (
        <WaveSection
            waveTop={waveTop}
            waveBottom={waveBottom}
            className="question"
        >
            <div className="question__texts container">
                <h2 className="subtitle">{subtitle}</h2>
                <Button title={title} href={href} className={"cta"} />
            </div>
        </WaveSection >
    )
}
