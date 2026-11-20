import "./index.css";

import type { ApplicationFormValues } from "../../../../types";

type ReviewStageProps = {
    values: ApplicationFormValues;
};

function formatResidence(residence: ApplicationFormValues["residence"]) {
    return residence === "casa" ? "Casa" : "Apartamento";
}

function formatPeople(people: number) {
    return `${people} ${people === 1 ? "pessoa" : "pessoas"}`;
}

function formatTimeAway(hours: number) {
    return `${hours} ${hours === 1 ? "hora" : "horas"}`;
}

function formatExperience(experience: string) {
    return experience.trim() || "Não informada";
}

function formatAgreement(agreement: boolean) {
    return agreement ? "Confirmado" : "Pendente";
}

export default function ReviewStage({ values }: ReviewStageProps) {
    return (
        <dl className="adoption-application-review">
            <div>
                <dt>Nome</dt>
                <dd>{values.name}</dd>
            </div>
            <div>
                <dt>Contato</dt>
                <dd>
                    {values.email} · {values.phone}
                </dd>
            </div>
            <div>
                <dt>Onde mora</dt>
                <dd>{formatResidence(values.residence)}</dd>
            </div>
            <div>
                <dt>Pessoas na casa</dt>
                <dd>{formatPeople(values.household)}</dd>
            </div>
            <div>
                <dt>Tempo fora de casa</dt>
                <dd>{formatTimeAway(values.timeAway)}</dd>
            </div>
            <div>
                <dt>Experiência</dt>
                <dd>{formatExperience(values.experience)}</dd>
            </div>
            <div>
                <dt>Acordo</dt>
                <dd>{formatAgreement(values.agreement)}</dd>
            </div>
        </dl>
    );
}
