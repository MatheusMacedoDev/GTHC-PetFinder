import "./index.css";

import type { ChangeEvent, ReactNode } from "react";

type TextFieldProps = {
    label: string;
    icon: ReactNode;
    value: string;
    type?: "text" | "email" | "tel";
    onChange: (value: string) => void;
};

export default function TextField({
    label,
    icon,
    value,
    type = "text",
    onChange,
}: TextFieldProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    return (
        <label className="adoption-application-field">
            <span>{label}</span>
            <span className="adoption-application-text">
                {icon}
                <input type={type} value={value} onChange={handleChange} />
            </span>
        </label>
    );
}
