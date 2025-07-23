import { useEffect, useState } from "react";
import "./input.css";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string | undefined;
    className: "none" | "footer__input"
}

export const Input = ({ name, title, value, onChange, className, ...rest }: InputProps) => {
    // Estado local solo si no se controla desde fuera
    const [inputValue, setInputValue] = useState(value || "");

    // Sincroniza valor externo si cambia
    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

    // Maneja cambios
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (onChange) onChange(e); // Llama al callback externo
        else setInputValue(newValue); // Usa estado local si no hay handler externo
    };
    return (
        <>
            <input
                {...rest}
                value={value !== undefined ? value : inputValue}
                onChange={handleChange}
                name={name}
                className={className}
            />
            {
                title && <label className="form__custom__label" htmlFor={name}>{title}</label>
            }
        </>


    )
}
