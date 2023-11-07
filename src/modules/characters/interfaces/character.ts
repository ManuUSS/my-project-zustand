export interface CharacterResponse {
    id:      number;
    name:    string;
    serie:   string;
    image:   string;
    about:   string;
    status:  Status;
    powers?: Power[];
    cover_photos?: string[];
}

export interface Power {
    name:         string;
    efectiveness: number;
}

export enum Status {
    "Alive" = "alive",
    "Dead" = "dead",
    "Unknown" = "unknown",
    "Unset" = "",
}

export interface CharacterLike extends Omit<CharacterResponse, "id"> {
}
