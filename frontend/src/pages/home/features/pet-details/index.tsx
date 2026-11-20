import "./index.css";

import { useEffect, useRef, useState } from "react";

import {
    Activity,
    Baby,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    HandHeart,
    Heart,
    House,
    Images,
    MapPin,
    Mars,
    PawPrint,
    Ruler,
    ShieldCheck,
    Sparkles,
    Users,
    Venus,
    X,
} from "lucide-react";

import type { Pet } from "../../../../entities/pet/model";

const personalityIcons = [Heart, Sparkles, Users, Baby];
const homeIcons = [House, Activity, PawPrint];

type PetDetailsProps = {
    pet: Pet;
    onClose: () => void;
    onAdopt: (pet: Pet) => void;
};

export default function PetDetails({
    pet,
    onClose,
    onAdopt,
}: PetDetailsProps) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
                return;
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="pet-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                ref={dialogRef}
                className="pet-details-modal"
                role="dialog"
            >
                <div className="pet-details-gallery">
                    <div className="pet-main-photo">
                        <img src={pet.gallery[photoIndex]} />
                        <span className="photo-counter">
                            <Images size={13} />
                            {photoIndex + 1} / {pet.gallery.length}
                        </span>
                    </div>
                    <div className="pet-thumbnails">
                        {pet.gallery.map((photo, index) => (
                            <button
                                className={
                                    index === photoIndex ? "is-selected" : ""
                                }
                                type="button"
                                key={photo}
                                onClick={() => setPhotoIndex(index)}
                            >
                                <img src={photo} alt="" />
                            </button>
                        ))}
                    </div>
                    <div className="shelter-card">
                        <House size={19} />
                        <div>
                            <strong>{pet.shelter}</strong>
                            <span>
                                Abrigo verificado · responde em até 1 dia
                            </span>
                        </div>
                        <BadgeCheck size={17} />
                    </div>
                </div>

                <div className="pet-details-content">
                    <div className="pet-details-header">
                        <div className="pet-name-row">
                            <h2 id="pet-details-title">{pet.name}</h2>
                            <span className="available-badge">Disponível</span>
                        </div>
                        <div className="pet-modal-actions">
                            <button type="button">
                                <Heart size={18} />
                            </button>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={onClose}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                    <p className="pet-details-location">
                        <MapPin size={13} />
                        {pet.location.replace(", SP", ", São Paulo")} •{" "}
                        {pet.distance}
                    </p>

                    <div className="pet-metadata">
                        <span className="metadata-age">
                            <CalendarDays size={12} />
                            {pet.age}
                        </span>
                        <span>
                            <Ruler size={12} />
                            Porte {pet.size}
                        </span>
                        <span className="metadata-sex">
                            {pet.sex === "Fêmea" ? (
                                <Venus size={12} />
                            ) : (
                                <Mars size={12} />
                            )}
                            {pet.sex}
                        </span>
                        <span>
                            <PawPrint size={12} />
                            {pet.breed}
                        </span>
                    </div>

                    <section className="pet-profile-section">
                        <h3>
                            Jeitinho {pet.sex === "Fêmea" ? "da" : "do"}{" "}
                            {pet.name}
                        </h3>
                        <div className="personality-tags">
                            {pet.personality.map((trait, index) => {
                                const Icon = personalityIcons[index];
                                return (
                                    <span
                                        className={`personality-tag ${trait.tone}`}
                                        key={trait.label}
                                    >
                                        <Icon size={12} />
                                        {trait.label}
                                    </span>
                                );
                            })}
                        </div>
                    </section>

                    <section className="pet-profile-section">
                        <h3>Sobre mim</h3>
                        <p className="pet-description">{pet.description}</p>
                    </section>

                    <section className="pet-profile-section">
                        <h3>Saúde e cuidados</h3>
                        <div className="health-tags">
                            {pet.health.map((item, index) => (
                                <span key={item}>
                                    {index === 0 ? (
                                        <ShieldCheck size={12} />
                                    ) : (
                                        <CheckCircle2 size={12} />
                                    )}
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="pet-profile-section">
                        <h3>Lar ideal</h3>
                        <div className="ideal-home-grid">
                            {pet.home.map((item, index) => {
                                const Icon = homeIcons[index];
                                return (
                                    <div
                                        className="ideal-home-item"
                                        key={item.title}
                                    >
                                        <Icon size={16} />
                                        <strong>{item.title}</strong>
                                        <span>{item.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <div className="adoption-section">
                        <p>
                            <HandHeart size={16} />A adoção é responsável e
                            inclui uma conversa com o abrigo.
                        </p>
                        <button type="button" onClick={() => onAdopt(pet)}>
                            <Heart size={15} />
                            Quero Adotar
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
