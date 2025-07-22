/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import "./index.css";

interface WaveSectionProps {
    waveTop?: string; // Ruta relativa a public (ej: "/assets/waves/top.svg")
    waveBottom?: string; // idem
    className?: string;
    children?: ReactNode;
}

export const WaveSection = ({
    waveTop,
    waveBottom,
    className = "",
    children,
}: WaveSectionProps) => {
    const style = {
        ...(waveTop && { ['--wave-top' as any]: `url(${waveTop})` }),
        ...(waveBottom && { ['--wave-bottom' as any]: `url(${waveBottom})` }),
    };

    return (
        <section className={`wave-section ${className}`} style={style}>
            {waveTop && <div className="wave wave--top" />}
            {children}
            {waveBottom && <div className="wave wave--bottom" />}
        </section>
    );
};
