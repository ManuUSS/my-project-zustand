type Path = {
    [x in Routes]: string;
};

type Routes = "JJK" | "DemonSlayer" | "HxH" | "New" | "Favorite"

export const PATHS:Path = {
    JJK: "/jjk",
    DemonSlayer: "/demon-slayer",
    HxH: "/hxh",
    New: "/new-character",
    Favorite: "/my-favorites"
}