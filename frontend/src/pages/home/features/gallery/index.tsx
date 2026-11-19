import "./index.css";

import { useCallback, useState, type KeyboardEvent } from "react";

import {
    ArrowDown,
    ArrowUpRight,
    Cat,
    ChevronDown,
    Heart,
    MapPin,
    PawPrint,
    X,
} from "lucide-react";

import PetDetails from "../pet-details";
import type { Pet } from "../../../../entities/pet/model";
import { pets } from "../../../../entities/pet/mocks";

export default function Gallery() {
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const closePet = useCallback(() => setSelectedPet(null), []);

    function openPet(pet: Pet) {
        setSelectedPet(pet);
    }

    function handleCardKeyDown(event: KeyboardEvent<HTMLElement>, pet: Pet) {
        if (event.target !== event.currentTarget) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPet(pet);
        }
    }

    return (
        <section className="pet-gallery">
            <div className="gallery-toolbar">
                <div className="gallery-filters">
                    <div className="filter-group">
                        <span className="filter-label">Espécie</span>
                        <button className="filter-chip is-active" type="button">
                            <PawPrint size={13} />
                            Cão
                            <X size={12} />
                        </button>
                        <button className="filter-chip" type="button">
                            <Cat size={13} />
                            Gato
                        </button>
                    </div>
                    <div className="filter-group">
                        <span className="filter-label">Porte</span>
                        <button className="filter-chip" type="button">
                            Pequeno
                        </button>
                        <button className="filter-chip is-active" type="button">
                            Médio
                            <X size={12} />
                        </button>
                        <button className="filter-chip" type="button">
                            Grande
                        </button>
                    </div>
                </div>
                <div className="gallery-sort">
                    <span className="result-count">48 amigos encontrados</span>
                    <button className="sort-button" type="button">
                        <ChevronDown size={14} />
                        Mais recentes
                    </button>
                </div>
            </div>

            <div className="gallery-intro">
                <div>
                    <h2 id="gallery-title">Conheça quem está por perto</h2>
                    <p>Perfis atualizados por abrigos parceiros.</p>
                </div>
                <p className="gallery-tip">
                    Passe o mouse para descobrir mais
                    <ArrowUpRight size={13} />
                </p>
            </div>

            <div className="pet-grid">
                {pets.map((pet) => (
                    <article
                        className="pet-card"
                        key={pet.name}
                        role="button"
                        tabIndex={0}
                        onClick={() => openPet(pet)}
                        onKeyDown={(event) => handleCardKeyDown(event, pet)}
                        aria-label={`Ver detalhes de ${pet.name}`}
                    >
                        <div className="pet-image-wrap">
                            <img
                                className="pet-image"
                                src={pet.image}
                                alt={`Foto de ${pet.name}`}
                            />
                            <button
                                className="favorite-button"
                                type="button"
                                onClick={(event) => event.stopPropagation()}
                                aria-label={`Favoritar ${pet.name}`}
                            >
                                <Heart size={18} aria-hidden="true" />
                            </button>
                            <button className="profile-button" type="button">
                                Ver perfil
                                <ArrowUpRight size={12} aria-hidden="true" />
                            </button>
                        </div>
                        <div className="pet-info">
                            <div className="pet-title-row">
                                <h3>{pet.name}</h3>
                                <span className="pet-age">{pet.age}</span>
                            </div>
                            <p className="pet-details">
                                {pet.breed} · porte {pet.size}
                            </p>
                            <p className="pet-location">
                                <MapPin size={13} />
                                {pet.location}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="gallery-footer">
                <span className="last-updated">Atualizado hoje às 10:32</span>
                <button className="load-more-button" type="button">
                    <ArrowDown size={18} />
                    Ver mais pets
                </button>
            </div>

            {selectedPet && (
                <PetDetails
                    key={selectedPet.name}
                    pet={selectedPet}
                    onClose={closePet}
                />
            )}
        </section>
    );
}
