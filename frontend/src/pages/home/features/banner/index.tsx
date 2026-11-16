import "./index.css";
import { ArrowRight, Heart, Search, Sparkles } from "lucide-react";
import BannerImage from "../../../../assets/resources/gallery-banner.webp";

export default function Banner() {
    return (
        <section className="banner">
            <div className="left-container">
                <div className="special-metric-pill">
                    <Sparkles size={12} />
                    <span>MAIS DE 2.400 ENCONTROS FELIZES</span>
                </div>
                <h2>Seu novo melhor amigo está esperando.</h2>
                <p>
                    Encontre cães e gatos de abrigos verificados, perto de você
                    — com histórias únicas e muito amor para compartilhar.
                </p>
                <div className="search-bar">
                    <div className="input-group">
                        <Search size={18} />
                        <input
                            type="text"
                            aria-label="Busque por nome, raça ou cidade"
                            placeholder="Busque por nome, raça ou cidade"
                        />
                    </div>
                    <button
                        className="search-button"
                        type="button"
                        aria-label="Buscar animais"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="banner-visual">
                <img
                    className="banner-image"
                    src={BannerImage}
                    alt="Dois cães felizes na janela de um carro durante um passeio"
                />
                <div className="banner-testimonial">
                    <Heart size={16} />
                    <p>“Foi amor no primeiro passeio.”</p>
                </div>
            </div>
        </section>
    );
}
