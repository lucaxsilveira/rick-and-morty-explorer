import React from 'react';

import { Card, Box, CardMedia, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { HeartSlash, Heart, Unlimited } from 'iconsax-react';

import { Character } from '@/context/character';
import { CardActions } from './styles';

interface CharacterItemProps {
  character: Character;
}

type Icons = {
  [key: string]: JSX.Element;
};

const CharacterItem: React.FC<CharacterItemProps> = ({
  character,
}: CharacterItemProps) => {
  const theme = useTheme();

  const icons = {
    alive: (
            <Heart
                size={20}
                color={theme.palette.primary.main}
                variant="Bold"
            />
    ),
    dead: (
            <HeartSlash
                size={20}
                color={theme.palette.grey[400]}
                variant="Outline"
            />
    ),
    unknown: (
            <Unlimited
                size={20}
                color={theme.palette.info.main}
                variant="Outline"
            />
    ),
  } as Icons;

  const RenderIcon: React.FC = (): JSX.Element | null => {
    const status = character.status.toLocaleLowerCase();
    if (!icons[status]) return null;
    return icons[status];
  };

  return (
        <Card sx={{ display: 'flex' }} variant="outlined">
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={character.image}
                loading="lazy"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {character.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Species: {character.species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Location: {character.location.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <RenderIcon />
                    <Typography variant="caption">
                        {character.status}
                    </Typography>
                </CardActions>
            </Box>
        </Card>
  );
};

export default CharacterItem;
