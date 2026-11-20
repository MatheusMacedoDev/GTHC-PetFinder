import "./index.css";

import { Check, HandHeart, Heart, HelpCircle } from "lucide-react";

import { applicationStages } from "../../data";
import type { AdoptionPet, ApplicationStage } from "../../types";

type ApplicationSidebarProps = {
    pet: AdoptionPet;
    currentStage: number;
};

type StepStatus = "completed" | "current" | "upcoming";

function getStepStatus(stepId: number, currentStage: number): StepStatus {
    if (stepId < currentStage) return "completed";
    if (stepId === currentStage) return "current";
    return "upcoming";
}

function getStepClassName(status: StepStatus) {
    if (status === "completed") return "is-completed";
    if (status === "current") return "is-current";
    return undefined;
}

function getStepCaption(status: StepStatus) {
    if (status === "completed") return "Concluído";
    if (status === "current") return "Etapa atual";
    return "Próxima etapa";
}

export default function ApplicationSidebar({
    pet,
    currentStage,
}: ApplicationSidebarProps) {
    function renderStep(stage: ApplicationStage) {
        const status = getStepStatus(stage.id, currentStage);

        return (
            <li className={getStepClassName(status)} key={stage.id}>
                <span className="adoption-application-step-marker">
                    {status === "completed" ? (
                        <Check size={16} strokeWidth={2.5} />
                    ) : (
                        stage.id
                    )}
                </span>
                <div>
                    <strong>{stage.title}</strong>
                    <span>{getStepCaption(status)}</span>
                </div>
            </li>
        );
    }

    return (
        <aside className="adoption-application-sidebar">
            <div className="adoption-application-intro">
                <span className="adoption-application-intro-icon">
                    <HandHeart size={20} strokeWidth={1.8} />
                </span>
                <h2>Vamos conhecer você</h2>
                <p>
                    Leva cerca de 4 minutos. Suas respostas serão enviadas ao abrigo.
                </p>
            </div>

            <ol className="adoption-application-steps">
                {applicationStages.map(renderStep)}
            </ol>

            <div className="adoption-application-pet-card">
                <img src={pet.image} alt={pet.name} />
                <div>
                    <span>Adoção para</span>
                    <strong>{pet.name}</strong>
                </div>
                <Heart size={16} strokeWidth={1.6} />
            </div>

            <button className="adoption-application-help" type="button">
                <HelpCircle size={14} />
                Precisa de ajuda?
            </button>
        </aside>
    );
}
