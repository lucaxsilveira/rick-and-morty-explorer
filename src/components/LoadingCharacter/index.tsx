import React from "react";

import { Box, Skeleton, Typography } from "@mui/material";

const LoadingCharacter: React.FC = () => {
    return (
        <Box display="flex">
            <Skeleton
                component="div"
                variant="rectangular"
                width={281}
                height={151}
            />
            <Box
                style={{ marginLeft: 16 }}
                display="flex"
                flexDirection="column"
                width="100%"
            >
                <Typography component="div" variant="h5">
                    <Skeleton variant="text" />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Skeleton width="40%" variant="text" />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Skeleton width="60%" variant="text" />
                </Typography>

                <Box style={{ marginTop: "auto" }} display="flex">
                    <Skeleton width="20px" height="20px" variant="text" />
                    <Skeleton
                        style={{ marginLeft: 8 }}
                        width="40px"
                        height="20px"
                        variant="text"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LoadingCharacter;
