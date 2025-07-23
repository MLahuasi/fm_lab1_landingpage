import { Button, WaveSection } from "../../components";
import "./main-question.css";


interface MainQuestionProps {
    subtitle: string;
    href: string;
    title: string;
}
export const MainQuestion = ({ subtitle, href, title }: MainQuestionProps) => {

    // ✅ Definimos rutas según resolución (mobile / desktop)
    const waveTopMobile = "/assets/waves/bg-section-bottom-mobile-2.svg";
    const waveTopDesktop = "/assets/waves/bg-section-bottom-desktop-2.svg";

    const waveBottomMobile = "/assets/waves/bg-footer-top-mobile.svg";
    const waveBottomDesktop = "/assets/waves/bg-footer-top-desktop.svg";

    return (
        <WaveSection
            waveTopMobile={waveTopMobile}
            waveTopDesktop={waveTopDesktop}
            waveBottomMobile={waveBottomMobile}
            waveBottomDesktop={waveBottomDesktop}
            className="question"
        >
            <div className="question__texts container">
                <h2 className="subtitle">{subtitle}</h2>
                <Button title={title} href={href} className={"cta"} />
            </div>
        </WaveSection >
    )
}
