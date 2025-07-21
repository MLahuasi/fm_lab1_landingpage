/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../../components";
import "./index.css";
// ondas
import bg_section_bottom_mobile_2 from "../../assets/images/bg-section-bottom-mobile-2.svg";
import bg_footer_top_mobile from "../../assets/images/bg-footer-top-mobile.svg";

interface MainQuestionProps {
    subtitle: string;
    href: string;
    title: string;
}
export const MainQuestion = ({ subtitle, href, title }: MainQuestionProps) => {
    const headerStyle = {
        ['--wave-top' as any]: `url(${bg_section_bottom_mobile_2})`,
        ['--wave-bottom' as any]: `url(${bg_footer_top_mobile})`,
    };
    return (
        <section
            className="question"
            style={headerStyle}
        >
            <div className="question__texts container">
                <h2 className="subtitle">{subtitle}</h2>
                <Button title={title} href={href} className={"cta"} />
            </div>


            {/* Ola en Background */}
            <div className="wave wave--top"></div>
            <div className="wave wave--bottom"></div>
        </section>
    )
}
