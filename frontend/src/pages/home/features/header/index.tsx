import "./index.css";
import { Heart, PawPrint } from "lucide-react";

export default function Header() {
    return (
        <header className="home-header">
            <div className="brand-group">
                <span className="logo">
                    <PawPrint size={18} />
                </span>
                <h1 className="home-title">PetFinder</h1>
            </div>
            <nav className="navigator">
                <a className="nav-link" href="/">
                    Adotar
                </a>
                <a className="nav-link" href="/">
                    Como funciona
                </a>
                <a className="nav-link" href="/">
                    Abrigos parceiros
                </a>
            </nav>
            <div className="header-buttons">
                <button className="favorite-button">
                    <Heart size={18} />
                </button>
                <button className="login-button">Entrar</button>
            </div>
        </header>
    );
}
