type Residence = "casa" | "apartamento";

export type ApplicationFormValues = {
    name: string;
    email: string;
    phone: string;
    residence: Residence;
    household: number;
    timeAway: number;
    experience: string;
    agreement: boolean;
};

export type ApplicationStage = {
    id: number;
    title: string;
    heading: string;
    description: string;
};

export type AdoptionPet = {
    name: string;
    image: string;
};

export type UpdateApplicationField = <Key extends keyof ApplicationFormValues>(
    key: Key,
    value: ApplicationFormValues[Key],
) => void;
