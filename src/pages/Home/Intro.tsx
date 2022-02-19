import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Intro = () => (
    <Box
        id="intro"
        sx={{
            height: '500px',
            backgroundColor: '#d69cff',
            padding: '40px',
        }}
    >
        <Typography variant="h4">Sweetscam</Typography>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Image
                src="/gingerbread.png"
                alt="gingerbread"
                width="330"
                height="330"
            />
        </Box>
    </Box>
);

export default Intro;
