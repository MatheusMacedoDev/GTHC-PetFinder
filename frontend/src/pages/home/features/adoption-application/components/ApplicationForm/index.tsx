import "./index.css";

import { useState, type SubmitEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { applicationStages, initialApplicationValues } from "../../data";
import type { ApplicationFormValues } from "../../types";
import HomeRoutineStage from "./stages/HomeRoutineStage";
import PersonalDataStage from "./stages/PersonalDataStage";
import ReviewStage from "./stages/ReviewStage";
import { getValidationErrors } from "./validation";

type ApplicationFormProps = {
    currentStage: number;
    onBack: () => void;
    onNext: () => void;
    onSubmit: () => void;
};

export default function ApplicationForm({
    currentStage,
    onBack,
    onNext,
    onSubmit,
}: ApplicationFormProps) {
    const [values, setValues] = useState(initialApplicationValues);
    const isLastStage = currentStage === applicationStages.length;
    const validationErrors = getValidationErrors(currentStage, values);
    const validationMessage = validationErrors[0] ?? null;
    const isCurrentStageValid = validationErrors.length === 0;

    function updateField<Key extends keyof ApplicationFormValues>(
        key: Key,
        value: ApplicationFormValues[Key],
    ) {
        setValues((current) => {
            const next = { ...current };
            next[key] = value;
            return next;
        });
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handlePrimaryAction() {
        if (!isCurrentStageValid) return;

        if (isLastStage) {
            onSubmit();
            return;
        }

        onNext();
    }

    function renderStage() {
        if (currentStage === 1) {
            return (
                <PersonalDataStage values={values} updateField={updateField} />
            );
        }

        if (currentStage === 2) {
            return (
                <HomeRoutineStage
                    values={values}
                    updateField={updateField}
                    onEditPersonalData={onBack}
                />
            );
        }

        return <ReviewStage values={values} />;
    }

    return (
        <form className="adoption-application-form" onSubmit={handleSubmit}>
            {renderStage()}

            {validationMessage && (
                <p
                    className="adoption-application-validation"
                    id="adoption-application-validation"
                    role="status"
                >
                    {validationMessage}
                </p>
            )}

            <div className="adoption-application-footer">
                {currentStage > 1 && (
                    <button
                        className="adoption-application-back"
                        type="button"
                        onClick={onBack}
                    >
                        <ArrowLeft size={14} />
                        Voltar
                    </button>
                )}
                <span className="adoption-application-autosave">
                    Salvo automaticamente
                </span>
                <button
                    className="adoption-application-continue"
                    type="button"
                    disabled={!isCurrentStageValid}
                    onClick={handlePrimaryAction}
                >
                    {isLastStage ? "Enviar" : "Continuar"}
                    <ArrowRight size={14} />
                </button>
            </div>
        </form>
    );
}
