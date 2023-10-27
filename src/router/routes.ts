type Path = {
    [x in Routes]: string;
};

type Routes = "JJK" | "DemonSlayer" | "HxH"

export const PATHS:Path = {
    JJK: "/jjk",
    DemonSlayer: "/demon-slayer",
    HxH: "/hxh"
}