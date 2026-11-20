import type { ApplicationFormValues } from "../../types";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    const localDigits =
        digits.startsWith("55") && digits.length > 11
            ? digits.slice(2)
            : digits;

    if (localDigits.length !== 11) {
        return false;
    }

    const areaCode = Number(localDigits.slice(0, 2));
    const isMobile = localDigits[2] === "9";

    return areaCode >= 11 && areaCode <= 99 && isMobile;
}

function addError(errors: string[], message: string) {
    if (!errors.includes(message)) {
        errors.push(message);
    }
}

export function getValidationErrors(
    stage: number,
    values: ApplicationFormValues,
) {
    const errors: string[] = [];

    if (stage === 1) {
        if (values.name.trim() === "") {
            addError(errors, "Informe seu nome completo.");
        }

        if (values.email.trim() === "") {
            addError(errors, "Informe seu e-mail.");
        } else if (!isValidEmail(values.email)) {
            addError(errors, "Informe um e-mail válido.");
        }

        if (values.phone.trim() === "") {
            addError(errors, "Informe seu telefone.");
        } else if (!isValidPhone(values.phone)) {
            addError(errors, "Informe um telefone celular válido com DDD.");
        }
    }

    if (stage >= 2 && !values.agreement) {
        addError(
            errors,
            stage === 2
                ? "Confirme o acordo para continuar."
                : "Confirme o acordo para enviar.",
        );
    }

    return errors;
}
