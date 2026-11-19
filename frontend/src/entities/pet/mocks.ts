import NinaImage from "../../assets/resources/galeria-pet-01.webp";
import BentoImage from "../../assets/resources/galeria-pet-02.webp";
import LolaImage from "../../assets/resources/galeria-pet-03.webp";
import TheoImage from "../../assets/resources/galeria-pet-04.webp";
import NinaMain from "../../assets/resources/detalhes-principal.webp";
import NinaThumbOne from "../../assets/resources/detalhes-miniatura-01.webp";
import NinaThumbTwo from "../../assets/resources/detalhes-miniatura-02.webp";
import NinaThumbThree from "../../assets/resources/detalhes-miniatura-03.webp";
import BentoDetail from "../../assets/resources/detalhes-galeria-02.webp";
import LolaDetail from "../../assets/resources/detalhes-galeria-03.webp";
import TheoDetail from "../../assets/resources/detalhes-galeria-04.webp";
import type { Pet } from "./model";

export const pets: Pet[] = [
    {
        name: "Nina",
        age: "2 anos",
        breed: "Vira-lata",
        size: "médio",
        sex: "Fêmea",
        location: "Vila Mariana, SP",
        distance: "3,2 km",
        image: NinaImage,
        gallery: [NinaMain, NinaThumbOne, NinaThumbTwo, NinaThumbThree],
        personality: [
            { label: "Carinhosa", tone: "mint" },
            { label: "Brincalhona", tone: "gold" },
            { label: "Sociável", tone: "blue" },
            { label: "Boa com crianças", tone: "neutral" },
        ],
        description:
            "Nina chegou ao abrigo tímida, mas logo mostrou seu lado doce e companheiro. Ama passeios tranquilos, cafuné atrás da orelha e cochilos perto de quem gosta. Procura uma família paciente para viver muitos finais felizes.",
        health: ["Vacinada", "Castrada", "Vermifugada", "Microchipada"],
        home: [
            { title: "Casa ou apê", description: "Com rotina de passeios" },
            { title: "Energia moderada", description: "2 passeios por dia" },
            { title: "Boa companhia", description: "Convive com cães" },
        ],
        shelter: "Instituto Patas Felizes",
    },
    {
        name: "Bento",
        age: "8 meses",
        breed: "Gato SRD",
        size: "pequeno",
        sex: "Macho",
        location: "Pinheiros, SP",
        distance: "4,1 km",
        image: BentoImage,
        gallery: [BentoImage, BentoDetail],
        personality: [
            { label: "Carinhoso", tone: "mint" },
            { label: "Brincalhão", tone: "gold" },
            { label: "Curioso", tone: "blue" },
            { label: "Boa com crianças", tone: "neutral" },
        ],
        description:
            "Bento é um filhote curioso que adora explorar cada cantinho da casa. Depois de brincar, procura um colo quentinho para descansar. Ele se dá bem com pessoas e está pronto para encontrar uma família.",
        health: ["Vacinado", "Castrado", "Vermifugado", "Microchipado"],
        home: [
            { title: "Casa ou apê", description: "Ambiente seguro e telado" },
            { title: "Energia alta", description: "Brincadeiras todos os dias" },
            { title: "Boa companhia", description: "Convive com gatos" },
        ],
        shelter: "Abrigo Amigo Fiel",
    },
    {
        name: "Lola",
        age: "4 anos",
        breed: "Beagle",
        size: "médio",
        sex: "Fêmea",
        location: "Moema, SP",
        distance: "5,6 km",
        image: LolaImage,
        gallery: [LolaImage, LolaDetail],
        personality: [
            { label: "Carinhosa", tone: "mint" },
            { label: "Brincalhona", tone: "gold" },
            { label: "Sociável", tone: "blue" },
            { label: "Boa com crianças", tone: "neutral" },
        ],
        description:
            "Lola é uma beagle alegre e companheira que adora passeios e novos cheiros. É muito gentil com pessoas e outros cães. Procura uma família ativa que também tenha tempo para bons momentos de descanso.",
        health: ["Vacinada", "Castrada", "Vermifugada", "Microchipada"],
        home: [
            { title: "Casa ou apê", description: "Com espaço para brincar" },
            { title: "Energia moderada", description: "Passeios diários" },
            { title: "Boa companhia", description: "Convive com cães" },
        ],
        shelter: "Projeto Patinhas",
    },
    {
        name: "Theo",
        age: "1 ano",
        breed: "Gato SRD",
        size: "pequeno",
        sex: "Macho",
        location: "Perdizes, SP",
        distance: "6,3 km",
        image: TheoImage,
        gallery: [TheoImage, TheoDetail],
        personality: [
            { label: "Carinhoso", tone: "mint" },
            { label: "Tranquilo", tone: "gold" },
            { label: "Sociável", tone: "blue" },
            { label: "Boa com crianças", tone: "neutral" },
        ],
        description:
            "Theo é um gato tranquilo e afetuoso que gosta de observar o movimento pela janela. Ele se adapta bem a novos ambientes e adora receber carinho. Será um companheiro sereno para uma família amorosa.",
        health: ["Vacinado", "Castrado", "Vermifugado", "Microchipado"],
        home: [
            { title: "Casa ou apê", description: "Ambiente seguro e telado" },
            { title: "Energia tranquila", description: "Sestas e brincadeiras leves" },
            { title: "Boa companhia", description: "Convive com gatos" },
        ],
        shelter: "Abrigo São Francisco",
    },
];
