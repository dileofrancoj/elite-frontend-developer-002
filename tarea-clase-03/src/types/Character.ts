export type Status = "Alive" | "unknown" | "Dead"
export type Gender = "Male" | "Female" | "unknown"
export type Species = "Human" | "Alien"

export interface CharacterProps {
    status: Status // vivo , muerto
    gender: Gender
    name: string
    id: number
    image: string
}

export interface FetchedCharacterProps {
    info: InfoProps
    results: CharacterProps[]
}

export interface InfoProps {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

