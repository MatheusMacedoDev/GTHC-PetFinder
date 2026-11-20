import { Mail, Phone, User } from "lucide-react";

import type {
    ApplicationFormValues,
    UpdateApplicationField,
} from "../../../../types";
import TextField from "../../components/TextField";

type PersonalDataStageProps = {
    values: ApplicationFormValues;
    updateField: UpdateApplicationField;
};

export default function PersonalDataStage({
    values,
    updateField,
}: PersonalDataStageProps) {
    function handleNameChange(name: string) {
        updateField("name", name);
    }

    function handleEmailChange(email: string) {
        updateField("email", email);
    }

    function handlePhoneChange(phone: string) {
        updateField("phone", phone);
    }

    return (
        <>
            <TextField
                label="Nome completo"
                icon={<User size={14} strokeWidth={1.5} />}
                value={values.name}
                onChange={handleNameChange}
            />

            <div className="adoption-application-field-row">
                <TextField
                    label="E-mail"
                    icon={<Mail size={14} strokeWidth={1.5} />}
                    type="email"
                    value={values.email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label="Telefone"
                    icon={<Phone size={14} strokeWidth={1.5} />}
                    type="tel"
                    value={values.phone}
                    onChange={handlePhoneChange}
                />
            </div>
        </>
    );
}
