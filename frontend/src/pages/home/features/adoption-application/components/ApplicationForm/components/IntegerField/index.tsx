import "./index.css";

import { useState, type ChangeEvent, type ReactNode } from "react";

type IntegerFieldProps = {
    label: string;
    icon: ReactNode;
    value: number;
    min: number;
    max: number;
    unitSingular: string;
    unitPlural: string;
    onChange: (value: number) => void;
};

export default function IntegerField({
    label,
    icon,
    value,
    min,
    max,
    unitSingular,
    unitPlural,
    onChange,
}: IntegerFieldProps) {
    const [draftValue, setDraftValue] = useState(String(value));

    function formatUnit(option: number) {
        return option === 1 ? unitSingular : unitPlural;
    }

    function clamp(value: number) {
        if (value < min) return min;

        if (value > max) return max;

        return value;
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const nextDraft = event.target.value;
        setDraftValue(nextDraft);

        if (nextDraft === "") return;

        const parsed = Number.parseInt(nextDraft);

        if (Number.isNaN(parsed)) return;

        onChange(clamp(parsed));
    }

    function handleBlur() {
        const parsed = Number.parseInt(draftValue);
        const normalized = Number.isNaN(parsed) ? min : clamp(parsed);

        setDraftValue(String(normalized));
        onChange(normalized);
    }

    return (
        <label className="adoption-application-field">
            <span>{label}</span>
            <span className="adoption-application-integer">
                {icon}
                <input
                    type="number"
                    min={min}
                    max={max}
                    step={1}
                    inputMode="numeric"
                    value={draftValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <span className="adoption-application-integer-unit">
                    {formatUnit(value)}
                </span>
            </span>
        </label>
    );
}
