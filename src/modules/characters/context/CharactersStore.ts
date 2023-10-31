import { create } from 'zustand';
import { MainSlice, createMainSlice } from './SliceMain';
import { JJKSlice, createJJKSlice } from './SliceJJK';
import { HxHSlice, createHxHlice } from './SliceHxH';
import { DemonSlice, createDemonSlice } from './SliceDemon';

/**
 * Merges all the previous slices created into a main characters store
 * following the coding practices of Slices Pattern
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 */
export const useCharactersStore = create<MainSlice & JJKSlice & DemonSlice & HxHSlice >()(( ... a ) => ({
    ...createMainSlice( ...a ),
    ...createJJKSlice( ...a ),
    ...createDemonSlice( ...a ),
    ...createHxHlice( ...a ),
}));