import { alpha, Box } from '@mui/material';

export default function BackgroundBox (props: any) {
    return <Box 
    sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
        height: '100%',
        backgroundImage:
        theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #E9C1FC, #FFF)'
            : `linear-gradient(#E9C1FC, ${alpha('#090E10', 0.0)})`,       
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
  })}>
    {props.children}
    </Box>
}