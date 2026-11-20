import "./index.css";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import type { Pet } from "../../../../entities/pet/model";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationSidebar from "./components/ApplicationSidebar";
import { applicationStages } from "./data";

type AdoptionApplicationProps = {
    pet: Pet;
    onClose: () => void;
};

export default function AdoptionApplication({
    pet,
    onClose,
}: AdoptionApplicationProps) {
    const [currentStage, setCurrentStage] = useState(1);
    const dialogRef = useRef<HTMLDivElement>(null);
    const stage = applicationStages[currentStage - 1];

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement as HTMLElement | null;
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const focusableElements =
                dialogRef.current?.querySelectorAll<HTMLElement>(
                    "button, input, textarea, [tabindex]:not([tabindex='-1'])",
                );
            if (!focusableElements?.length) return;

            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            previousFocus?.focus();
        };
    }, [onClose]);

    function handleBack() {
        setCurrentStage((stage) => Math.max(1, stage - 1));
    }

    function handleNext() {
        setCurrentStage((stage) =>
            Math.min(applicationStages.length, stage + 1),
        );
    }

    return (
        <div
            className="adoption-application-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                className="adoption-application-modal"
                ref={dialogRef}
                role="dialog"
                tabIndex={-1}
            >
                <ApplicationSidebar pet={pet} currentStage={currentStage} />

                <main className="adoption-application-content">
                    <button
                        className="adoption-application-close"
                        type="button"
                        onClick={onClose}
                    >
                        <X size={18} />
                    </button>

                    <span className="adoption-application-stage">
                        Etapa {currentStage} de {applicationStages.length}
                    </span>
                    <h1>{stage.heading}</h1>
                    <p className="adoption-application-description">
                        {stage.description}
                    </p>

                    <ApplicationForm
                        currentStage={currentStage}
                        onBack={handleBack}
                        onNext={handleNext}
                        onSubmit={onClose}
                    />
                </main>
            </div>
        </div>
    );
}
