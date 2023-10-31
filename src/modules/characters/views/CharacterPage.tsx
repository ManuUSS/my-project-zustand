import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ListHeader, useCharacter } from '..';

export const CharacterPage = () => {

  const params = useParams();  
  const { id = '0' } = params;

  const { getCharacterData } = useCharacter({});
  const [ character ] = useState( getCharacterData( +id! ) );

  return (
    <section className="list-container p-4">
        <ListHeader title={ character?.name || "" } hideSearcher />
    </section>
  )
}
