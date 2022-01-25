import React from "react";

import { Box } from "@mui/material";
import LoadingCharacter from "components/LoadingCharacter";

const LoadingCharacterGrid: React.FC = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                marginTop: "2rem",
            }}
        >
            {Array.from({ length: 2 }, (_, i) => (
                <LoadingCharacter />
            ))}
        </Box>
    );
};

export default LoadingCharacterGrid;
