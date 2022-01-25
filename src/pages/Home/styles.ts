import { styled, css } from '@mui/system';
import { Typography } from '@mui/material';

interface FormProps {
  hasError: boolean;
}

export const BackgroundStripe = styled('div')`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 380px;
    z-index: -1;
    background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const PageTitle = styled(Typography)`
    max-width: 360px;
    margin-top: ${({ theme }) => theme.spacing(16)};
    font-weight: bold;
    color: white;
`;

export const Form = styled('form')<FormProps>`
    margin-top: 40px;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    display: flex;
    position: relative;

    img {
        width: 200px;
        position: absolute;
        right: 0;
        top: -155px;
    }

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px;
        border: 2px solid #ddd;

        ${(props) =>
    props.hasError &&
            css`
                border-color: red;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }
`;

export const Characters = styled('div')`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  margin-bottom: ${({ theme }) => theme.spacing(4)};

  a {
    text-decoration: none;
  }
}
`;
