export interface Pet {
    name: string;
    age: string;
    breed: string;
    size: string;
    sex: "Fêmea" | "Macho";
    location: string;
    distance: string;
    image: string;
    gallery: string[];
    personality: { label: string; tone: "mint" | "gold" | "blue" | "neutral" }[];
    description: string;
    health: string[];
    home: { title: string; description: string }[];
    shelter: string;
}
