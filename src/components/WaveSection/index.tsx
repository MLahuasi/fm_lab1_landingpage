import { ReactNode } from "react";
import "./index.css";

interface WaveSectionProps {
    waveTop?: string;
    waveBottom?: string;
    className?: string;
    children?: ReactNode;
}

export const WaveSection = ({
    waveTop,
    waveBottom,
    className = "",
    children,
}: WaveSectionProps) => {
    return (
        <section className={`wave-section ${className}`}>
            {waveTop && (
                <div className="wave wave--top" style={{ backgroundImage: `url(${waveTop})` }} />
            )}
            {children}
            {waveBottom && (
                <div className="wave wave--bottom" style={{ backgroundImage: `url(${waveBottom})` }} />
            )}
        </section>
    );
};
