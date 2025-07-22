import { Button, WaveSection } from "../../components";
import "./index.css";


interface MainQuestionProps {
    subtitle: string;
    href: string;
    title: string;
}
export const MainQuestion = ({ subtitle, href, title }: MainQuestionProps) => {

    // ondas
    const waveTop = "/assets/waves/bg-section-bottom-mobile-2.svg";
    const waveBottom = "/assets/waves/bg-footer-top-mobile.svg";
    console.log({ waveBottom, waveTop, Source: "MainQuestion" });

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
