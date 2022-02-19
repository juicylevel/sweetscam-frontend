import { Box, Link, Stack, Typography } from '@mui/material';

const Footer = () => (
    <Box
        sx={{
            backgroundColor: '#839BE0',
            padding: '30px',
        }}
    >
        <Stack flexDirection="row" justifyContent="center" gap={3}>
            <Link>Telegram</Link>
            <Link>Twitter</Link>
            <Link>Medium</Link>
            <Link>Discord</Link>
        </Stack>
    </Box>
);

export default Footer;
