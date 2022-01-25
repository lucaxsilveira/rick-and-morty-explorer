import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterContext } from 'context/character';

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const { getById, loading, error, character } = useCharacterContext();

  useEffect(() => {
    if (id) {
      getById(id);
    }
  }, [getById, id]);

  return <div>{JSON.stringify(character)}</div>;
};

export default Character;
