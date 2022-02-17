import { CardActions as CardActionsUI } from '@mui/material';
import { styled } from '@mui/system';

export const CardActions = styled(CardActionsUI)`
    display: flex;
    align-items: center;

    svg {
        margin-right: ${({ theme }) => theme.spacing(2)};
    }
`;
