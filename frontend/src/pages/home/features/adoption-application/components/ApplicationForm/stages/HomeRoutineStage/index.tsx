import "./index.css";

import { CheckCircle2, Clock3, Users } from "lucide-react";

import type {
    ApplicationFormValues,
    UpdateApplicationField,
} from "../../../../types";
import AgreementCheckbox from "../../components/AgreementCheckbox";
import ExperienceField from "../../components/ExperienceField";
import IntegerField from "../../components/IntegerField";
import ResidenceField from "../../components/ResidenceField";

type HomeRoutineStageProps = {
    values: ApplicationFormValues;
    updateField: UpdateApplicationField;
    onEditPersonalData: () => void;
};

export default function HomeRoutineStage({
    values,
    updateField,
    onEditPersonalData,
}: HomeRoutineStageProps) {
    function handleResidenceChange(residence: ApplicationFormValues["residence"]) {
        updateField("residence", residence);
    }

    function handleHouseholdChange(household: number) {
        updateField("household", household);
    }

    function handleTimeAwayChange(timeAway: number) {
        updateField("timeAway", timeAway);
    }

    function handleExperienceChange(experience: string) {
        updateField("experience", experience);
    }

    function handleAgreementChange(agreement: boolean) {
        updateField("agreement", agreement);
    }

    return (
        <>
            <div className="adoption-application-applicant">
                <CheckCircle2
                    size={22}
                    fill="currentColor"
                    strokeWidth={1.5}
                />
                <div>
                    <strong>{values.name}</strong>
                    <span>
                        {values.email} · {values.phone}
                    </span>
                </div>
                <button type="button" onClick={onEditPersonalData}>
                    Editar
                </button>
            </div>

            <ResidenceField
                value={values.residence}
                onChange={handleResidenceChange}
            />

            <div className="adoption-application-field-row">
                <IntegerField
                    label="Quantas pessoas moram com você?"
                    icon={<Users size={14} strokeWidth={1.5} />}
                    value={values.household}
                    min={0}
                    max={50}
                    unitSingular="pessoa"
                    unitPlural="pessoas"
                    onChange={handleHouseholdChange}
                />
                <IntegerField
                    label="Tempo fora de casa por dia"
                    icon={<Clock3 size={14} strokeWidth={1.5} />}
                    value={values.timeAway}
                    min={0}
                    max={24}
                    unitSingular="hora"
                    unitPlural="horas"
                    onChange={handleTimeAwayChange}
                />
            </div>

            <ExperienceField
                value={values.experience}
                onChange={handleExperienceChange}
            />

            <AgreementCheckbox
                checked={values.agreement}
                onChange={handleAgreementChange}
            />
        </>
    );
}
