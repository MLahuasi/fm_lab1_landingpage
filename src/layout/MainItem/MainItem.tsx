import { WaveSection } from "../../components";
import "./main-item.css";


interface MainItemProps {
    src: string;
    subtitle: string;
    paragraph: string;
    bgModifier: "none" | "section--white";
    inverseImage: "none" | "section__container--inverse";
}

export const MainItem = ({ src, subtitle, paragraph, bgModifier, inverseImage }: MainItemProps) => {
    // Lógica de ondas responsive
    const isWhite = bgModifier === "section--white";

    const waveTopMobile = isWhite
        ? "/assets/waves/bg-section-bottom-mobile-1.svg"
        : undefined;
    const waveTopDesktop = isWhite
        ? "/assets/waves/bg-section-bottom-desktop-1.svg"
        : undefined;

    const waveBottomMobile = isWhite
        ? "/assets/waves/bg-section-top-mobile-2.svg"
        : undefined;
    const waveBottomDesktop = isWhite
        ? "/assets/waves/bg-section-top-desktop-2.svg"
        : undefined;

    return (
        <WaveSection
            waveTopMobile={waveTopMobile}
            waveTopDesktop={waveTopDesktop}
            waveBottomMobile={waveBottomMobile}
            waveBottomDesktop={waveBottomDesktop}
            className={bgModifier == "none" ? "section" : `section ${bgModifier}`}
        >
            <div className={(inverseImage == "none" ? "section__container container" : `section__container ${inverseImage} container`)}>
                <figure className="section__picture">
                    <img src={src} alt="" className="section__img" />
                </figure>
                <div className="section__texts">
                    <h2 className="subtitles">{subtitle}</h2>
                    <p className="section__paragraph">
                        {paragraph}
                    </p>
                </div>
            </div>
        </WaveSection>

    )
}



