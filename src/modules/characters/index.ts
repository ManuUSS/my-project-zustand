

// <--- Views --->
export { MainListPage } from './views/MainListPage';
export { JJKListPage } from './views/JJKListPage';
export { HxHListPage } from './views/HxHListPage';
export { DemonSlayerListPage } from './views/DemonSlayerListPage';
export { NewCharacter } from './views/NewCharacter';

// <--- Components --->
export { CharacterCard } from './components';
export { ListHeader } from './components/ListHeader';

// <--- Context --->
export { useCharactersStore } from './context/CharactersContext';

// <--- API --->
export { charactersApi } from "./api/charactersApi";

// <--- Actions --->
export * as charactersActions from './services/actions'

// <--- Hooks --->
export { useCharacters } from "./hooks/useCharacters";
export { useSearcher } from "./hooks/useSearcher";
export { useNewCharacter } from "./hooks/useNewCharacter";

// <--- Interfaces --->
export type { CharacterResponse, Status, CharacterLike } from './interfaces/character';
