import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '@/services/api';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type PageInfo = {
  count: number;
  pages: number;
  next: string;
  previous: string;
};

export type PropsCharacterContext = {
  loading: boolean;
  error: string;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  character: Character;
  characters: Character[];
  pageInfo: PageInfo;
  searchByName: (name: string) => void;
  searchByPage: (page: string | number) => void;
  getById: (id: string) => void;
};

const defaultState = {
  characters: [],
  pageInfo: {
    count: 0,
    pages: 0,
    next: '',
    previous: '',
  },
  character: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [''],
    url: '',
    created: '',
  },
  setCharacter: () => {},
  searchByName: (name: string): void => {},
  searchByPage: (page: string | number): void => {},
  getById: (id: string): void => {},
  loading: true,
  error: '',
};

const CharacterContext = createContext<PropsCharacterContext>(defaultState);
const useCharacterContext = () => useContext(CharacterContext);

const CharacterContextProvider: React.FC = ({ children }) => {
  const [character, setCharacter] = useState(defaultState.character);
  const [pageInfo, setPageInfo] = useState(defaultState.pageInfo);
  const [characters, setCharacters] = useState(defaultState.characters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const performRequest = async (url: string) => {
    setLoading(true);

    try {
      setError('');
      const { data } = await api.get(url);
      const { results = [], info = defaultState.pageInfo } = data;
      setCharacters(results);
      setPageInfo(info);
    } catch (error: any) {
      setCharacters(defaultState.characters);
      if (error?.response.data.error) {
        setError(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    performRequest('https://rickandmortyapi.com/api/character');
  }, []);

  const getById = useCallback(async (id) => {
    try {
      setLoading(true);
      const { data } = await api.get(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      setCharacter(data);
    } catch (error: any) {
      setCharacter(defaultState.character);
      if (error?.response.data.error) {
        setError(error.response.data.error);
      }
      setLoading(false);
    }
  }, []);

  const searchByName = useCallback(async (name) => {
    performRequest(
      `https://rickandmortyapi.com/api/character?name=${name}`,
    );
  }, []);

  const searchByPage = useCallback(async (page) => {
    performRequest(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );
  }, []);

  return (
        <CharacterContext.Provider
            value={{
              error,
              loading,
              characters,
              character,
              setCharacter,
              pageInfo,
              searchByName,
              searchByPage,
              getById,
            }}
        >
            {children}
        </CharacterContext.Provider>
  );
};

export { useCharacterContext, CharacterContextProvider };
export default CharacterContext;
