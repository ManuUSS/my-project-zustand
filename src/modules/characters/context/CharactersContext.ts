import { create } from 'zustand';
import { MainSlice, createMainSlice } from './SliceMain';
import { JJKSlice, createJJKSlice } from './SliceJJK';
import { HxHSlice, createHxHlice } from './SliceHxH';
import { DemonSlice, createDemonSlice } from './SliceDemon';


export const useCharactersStore = create<MainSlice & JJKSlice & DemonSlice & HxHSlice >()(( ... a ) => ({
    ...createMainSlice( ...a ),
    ...createJJKSlice( ...a ),
    ...createDemonSlice( ...a ),
    ...createHxHlice( ...a ),
}));