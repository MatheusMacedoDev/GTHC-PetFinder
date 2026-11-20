import { useCallback, useState } from "react";

import type { Pet } from "../../entities/pet/model";
import AdoptionApplication from "./features/adoption-application/";
import Banner from "./features/banner/";
import Gallery from "./features/gallery/";
import Header from "./features/header/";

export default function Home() {
    const [adoptionPet, setAdoptionPet] = useState<Pet | null>(null);
    const closeAdoption = useCallback(() => setAdoptionPet(null), []);

    return (
        <div>
            <Header />
            <Banner />
            <Gallery onAdopt={setAdoptionPet} />
            {adoptionPet && (
                <AdoptionApplication pet={adoptionPet} onClose={closeAdoption} />
            )}
        </div>
    );
}
