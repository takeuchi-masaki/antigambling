import { alpha, Box } from '@mui/material';

export default function BackgroundBox (props: any) {
    return <Box 
    sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
        height: '100%',
        backgroundImage:
        theme.palette.mode === 'light'
            ? '#FFF'
            : 'linear-gradient(180deg, #E9C1FC, #670090)',       
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
  })}>
    {props.children}
    </Box>
}