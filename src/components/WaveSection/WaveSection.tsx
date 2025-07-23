/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react";
import "./wave-section.css";

interface WaveSectionProps {
    waveTop?: string;
    waveBottom?: string;
    waveTopMobile?: string;
    waveBottomMobile?: string;
    waveTopDesktop?: string;
    waveBottomDesktop?: string;
    className?: string;
    children?: ReactNode;
}

export const WaveSection = ({
    waveTop,
    waveBottom,
    waveTopMobile,
    waveBottomMobile,
    waveTopDesktop,
    waveBottomDesktop,
    className = "",
    children,
}: WaveSectionProps) => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Función para determinar si el viewport es desktop
        const checkSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkSize(); // Inicial

        // Suscribirse a resize
        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const finalWaveTop =
        waveTop ||
        (isDesktop ? waveTopDesktop : waveTopMobile) ||
        undefined;

    const finalWaveBottom =
        waveBottom ||
        (isDesktop ? waveBottomDesktop : waveBottomMobile) ||
        undefined;

    const style = {
        ...(finalWaveTop && { ["--wave-top" as any]: `url(${finalWaveTop})` }),
        ...(finalWaveBottom && {
            ["--wave-bottom" as any]: `url(${finalWaveBottom})`,
        }),
    };

    console.log({ isDesktop, finalWaveTop, finalWaveBottom, style });

    return (
        <section className={`wave-section ${className}`} style={style}>
            {finalWaveTop && <div className="wave wave--top" />}
            {children}
            {finalWaveBottom && <div className="wave wave--bottom" />}
        </section>
    );
};
