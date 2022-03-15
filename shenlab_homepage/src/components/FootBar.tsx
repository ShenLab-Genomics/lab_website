import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";

function CopyRight() {
    return (
        <Typography color="text.secondary">
            {'Copyright © Shen Lab, Zhejiang University '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function FootBar() {
    return (
        <Box component="footer" sx={{ mt: 'auto', textAlign: 'center', backgroundColor: "lightgrey" }}>
            <Container maxWidth="sm">
                <CopyRight />
            </Container>
        </Box>
    )
}