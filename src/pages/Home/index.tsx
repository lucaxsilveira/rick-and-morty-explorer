import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PaginationItem, Pagination, Box } from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

import { useCharacterContext } from 'context/character';

import NotFound from 'components/NotFound';
import LoadingCharacterGrid from 'components/LoadingCharacterGrid';
import CharacterItem from 'components/CharacterItem';

import rickAndMorty from 'assets/background.png';

import { BackgroundStripe, Form, Characters, PageTitle } from './styles';

const Home = () => {
  const [timeout, setTimeoutToDelay] = useState(setTimeout(() => {}, 0));
  const { error, loading, searchByName, searchByPage, characters, pageInfo } =
        useCharacterContext();

  const handleChange = useCallback(
    ({ target: { value } }) => {
      timeout && clearTimeout(timeout);

      setTimeoutToDelay(
        setTimeout(() => {
          searchByName(value);
        }, 500),
      );
    },
    [timeout, searchByName],
  );

  const handleChangePagination = useCallback(
    (_, value) => {
      searchByPage(value);
    },
    [searchByPage],
  );

  useEffect(() => {
    console.log('loading', loading);
  }, [loading]);

  return (
        <>
            <BackgroundStripe />
            <PageTitle variant="h3">
                Explore os personagens de Rick and Morty
            </PageTitle>

            <Form hasError={!!error} onSubmit={(e) => e.preventDefault()}>
                <img src={rickAndMorty} alt="Search Image" loading="eager" />
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Digite o nome do personagem"
                />
            </Form>

            {error && <NotFound message={error} />}
            {loading && <LoadingCharacterGrid />}

            {!loading && (
                <Characters>
                    {characters.map((character) => (
                        <Link to={{ pathname: `character/${character.id}` }}>
                            <CharacterItem character={character} />
                        </Link>
                    ))}
                </Characters>
            )}

            {!error && !loading && pageInfo.pages > 0 && (
                <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                >
                    <Pagination
                        color="primary"
                        showFirstButton
                        showLastButton
                        count={pageInfo.pages}
                        onChange={handleChangePagination}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{
                                  previous: ArrowBackIcon,
                                  next: ArrowForwardIcon,
                                }}
                                {...item}
                            />
                        )}
                    />
                </Box>
            )}
        </>
  );
};

export default Home;
