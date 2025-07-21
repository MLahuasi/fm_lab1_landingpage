import "./index.css";

interface MainItemProps {
    src: string;
    subtitle: string;
    paragraph: string;
    bgModifier: "none" | "section--white";
    inverseImage: "none" | "section__container--inverse";
}

export const MainItem = ({ src, subtitle, paragraph, bgModifier, inverseImage }: MainItemProps) => {

    return (
        <section className={bgModifier == "none" ? "section" : `section ${bgModifier}`}>
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
