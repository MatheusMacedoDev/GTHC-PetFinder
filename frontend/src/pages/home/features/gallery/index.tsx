import "./index.css";

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

import NinaImage from "../../../../assets/resources/galeria-pet-01.webp";
import BentoImage from "../../../../assets/resources/galeria-pet-02.webp";
import LolaImage from "../../../../assets/resources/galeria-pet-03.webp";
import TheoImage from "../../../../assets/resources/galeria-pet-04.webp";

const pets = [
    {
        name: "Nina",
        age: "2 anos",
        details: "Vira-lata · porte médio",
        location: "Vila Mariana, SP",
        image: NinaImage,
    },
    {
        name: "Bento",
        age: "8 meses",
        details: "Gato SRD · porte pequeno",
        location: "Pinheiros, SP",
        image: BentoImage,
    },
    {
        name: "Lola",
        age: "4 anos",
        details: "Beagle · porte médio",
        location: "Moema, SP",
        image: LolaImage,
    },
    {
        name: "Theo",
        age: "1 ano",
        details: "Gato SRD · porte pequeno",
        location: "Perdizes, SP",
        image: TheoImage,
    },
];

export default function Gallery() {
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
                    <article className="pet-card" key={pet.name}>
                        <div className="pet-image-wrap">
                            <img className="pet-image" src={pet.image} />
                            <button className="favorite-button" type="button">
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
                            <p className="pet-details">{pet.details}</p>
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
        </section>
    );
}
