/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
// ondas
import bg_section_bottom_mobile_1 from "../../assets/images/bg-section-bottom-mobile-1.svg";
import bg_section_top_mobile_2 from "../../assets/images/bg-section-top-mobile-2.svg";

interface MainItemProps {
    src: string;
    subtitle: string;
    paragraph: string;
    bgModifier: "none" | "section--white";
    inverseImage: "none" | "section__container--inverse";
}

export const MainItem = ({ src, subtitle, paragraph, bgModifier, inverseImage }: MainItemProps) => {

    const headerStyle =
        bgModifier == "section--white"
            ? {
                ['--wave-top' as any]: `url(${bg_section_bottom_mobile_1})`,
                ['--wave-bottom' as any]: `url(${bg_section_top_mobile_2})`,
            }
            : undefined;

    return (
        <section
            className={bgModifier == "none" ? "section" : `section ${bgModifier}`}
            style={headerStyle}
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

            {/* Ola en Background */}
            <div className="wave wave--top"></div>
            <div className="wave wave--bottom"></div>
        </section>

    )
}



