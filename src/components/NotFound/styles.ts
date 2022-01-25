import { styled } from "@mui/system";

export const Error = styled("span")`
    display: block;
    margin-top: 8px;
    color: ${({ theme }) => theme.palette.error.main};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 50%;
        height: auto;
    }
`;
