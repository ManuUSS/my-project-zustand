type Path = {
    [x in Routes]: string;
};

type Routes = "JJK" | "DemonSlayer" | "HxH" | "New" | "Edit" | "Favorite"

export const PATHS:Path = {
    JJK: "/jjk",
    DemonSlayer: "/demon-slayer",
    HxH: "/hxh",
    New: "/new-character",
    Edit: "/edit-character/:id",
    Favorite: "/my-favorites"
}