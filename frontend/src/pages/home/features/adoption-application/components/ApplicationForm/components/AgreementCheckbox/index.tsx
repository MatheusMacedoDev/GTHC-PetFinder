import "./index.css";

import type { ChangeEvent } from "react";

type AgreementCheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export default function AgreementCheckbox({
    checked,
    onChange,
}: AgreementCheckboxProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.checked);
    }

    return (
        <label className="adoption-application-agreement">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span>
                Confirmo que todos da casa estão de acordo com a adoção.
            </span>
        </label>
    );
}
