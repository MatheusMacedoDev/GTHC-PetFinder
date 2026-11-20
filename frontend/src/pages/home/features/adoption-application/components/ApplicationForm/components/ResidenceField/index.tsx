import "./index.css";

import { Building2, Check, House } from "lucide-react";

import type { ApplicationFormValues } from "../../../../types";

const residenceOptions = [
    {
        value: "casa",
        label: "Casa",
        description: "Com quintal ou área externa",
        Icon: House,
    },
    {
        value: "apartamento",
        label: "Apartamento",
        description: "Com telas nas janelas",
        Icon: Building2,
    },
] as const;

type ResidenceOption = (typeof residenceOptions)[number];

type ResidenceFieldProps = {
    value: ApplicationFormValues["residence"];
    onChange: (value: ApplicationFormValues["residence"]) => void;
};

export default function ResidenceField({
    value,
    onChange,
}: ResidenceFieldProps) {
    function renderResidenceOption(option: ResidenceOption) {
        const isSelected = value === option.value;
        const Icon = option.Icon;

        return (
            <button
                className={isSelected ? "is-selected" : ""}
                type="button"
                key={option.value}
                onClick={() => onChange(option.value)}
            >
                <Icon size={18} strokeWidth={1.5} />
                <span>
                    <strong>{option.label}</strong>
                    <small>{option.description}</small>
                </span>
                <span className="adoption-application-radio">
                    {isSelected && <Check size={10} strokeWidth={3} />}
                </span>
            </button>
        );
    }

    return (
        <fieldset className="adoption-application-residence">
            <legend>Onde você mora?</legend>
            <div className="adoption-application-residence-options">
                {residenceOptions.map(renderResidenceOption)}
            </div>
        </fieldset>
    );
}
