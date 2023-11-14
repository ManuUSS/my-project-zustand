

// <--- Views --->
export { MainListPage } from './views/MainListPage';
export { JJKListPage } from './views/JJKListPage';
export { HxHListPage } from './views/HxHListPage';
export { DemonSlayerListPage } from './views/DemonSlayerListPage';
export { FavoriteListPage } from './views/FavoriteListPage';
export { NewCharacter } from './views/NewCharacter';
export { EditCharacter } from './views/EditCharacter';
export { CharacterPage } from './views/CharacterPage';

// <--- Components --->
export { ListHeader } from './components/ListHeader';
export { CharacterCard } from './components';
export { CharacterPowerChip } from './components/CharacterPowerChip';
export { CharacterForm } from './components/CharacterForm';
export { CharacterImage } from './components/CharacterImage';
export { NoCharacters } from './components/NoCharacters';
export { CardButtons } from './components/CardButtons';

// <--- Context --->
export { useCharactersStore } from './context/CharactersStore';
export { useFavoriteStore } from './context/FavoritesStore';

// <--- API --->
export { charactersApi } from "./api/charactersApi";

// <--- Actions --->
export * as charactersActions from './services/actions'

// <--- Hooks --->
export { useCharacters } from "./hooks/useCharacters";
export { useCharacter } from "./hooks/useCharacter";
export { useCharacterFavorite } from "./hooks/useCharacterFavorite";
export { useSearcher } from "./hooks/useSearcher";
export { useNewCharacter } from "./hooks/useNewCharacter";
export { useDeleteCharacter } from "./hooks/useDeleteCharacter";

// <--- Utils --->
export { validateStatus, validateStautsFilter, getStatusText } from './utils/validateStatus';

// <--- Interfaces --->
export type { CharacterResponse, CharacterLike, Power } from './interfaces/character';
export type { StatusCharacter } from './interfaces/searcher';
export { Status } from './interfaces/character'; 
