import type { ApplicationFormValues, ApplicationStage } from "./types";

export const applicationStages: ApplicationStage[] = [
    {
        id: 1,
        title: "Seus dados",
        heading: "Seus dados",
        description: "Confira e atualize seus dados antes de continuar.",
    },
    {
        id: 2,
        title: "Casa e rotina",
        heading: "Sua casa e rotina",
        description:
            "Conte um pouco sobre o espaço e a experiência que você pode oferecer.",
    },
    {
        id: 3,
        title: "Revisar e enviar",
        heading: "Revise e envie",
        description: "Confira suas respostas antes de enviar a candidatura.",
    },
];

export const initialApplicationValues: ApplicationFormValues = {
    name: "",
    email: "",
    phone: "",
    residence: "casa",
    household: 2,
    timeAway: 6,
    experience: "",
    agreement: false,
};
