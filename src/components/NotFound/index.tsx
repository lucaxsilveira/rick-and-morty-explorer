import React from "react";

import { Error } from "./styles";

import error from "assets/not-found.png";

interface NotFoundProps {
    message: string;
}

const NotFound: React.FC<NotFoundProps> = ({ message }: NotFoundProps) => {
    return (
        <Error>
            <img src={error} alt="Not Found" />
            <p>{message}</p>
        </Error>
    );
};

export default NotFound;
