import "./index.css";

import type { ChangeEvent } from "react";

type ExperienceFieldProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function ExperienceField({
    value,
    onChange,
}: ExperienceFieldProps) {
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
    }

    return (
        <label className="adoption-application-field adoption-application-experience">
            <span className="adoption-application-label-row">
                <span>Qual é sua experiência com pets?</span>
                <small>Opcional</small>
            </span>
            <textarea
                value={value}
                placeholder="Conte sobre os pets que já teve, por quanto tempo e como eram os cuidados..."
                onChange={handleChange}
            />
        </label>
    );
}
