import { CharacterResponse } from '..';

export const getRandomCharacters = ( charList: CharacterResponse[] ): CharacterResponse[] => {
    let nums = new Set<number>();
    let numberCharacters = 5;
    let length = charList.length;
    const newCharList:CharacterResponse[] = [];

    while ( nums.size < numberCharacters ) {
        nums.add( Math.floor( Math.random() * ( length - 1 + 1) + 1) );
    }

    Array.from( nums ).forEach(( num, index ) => newCharList[ index ] = charList[ num ]);

    return newCharList;
}