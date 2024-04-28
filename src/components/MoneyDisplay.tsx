import { Box, Typography, colors } from "@mui/material";

interface MoneyDisplayProps{
    balance: number;
}
export default function MoneyDisplay({balance}: MoneyDisplayProps) {
  return (
    <Box>
        <Typography 
            variant="h5"
            sx={{
                color: 'white'
            }}>
            Balance:
        </Typography>
        <Typography
            variant="h5"
            textAlign={'center'}
            sx={{
                color: (balance < 0 ? 'red' : colors.lightGreen[600]),
            }}>
            {balance < 0 ? '-' : ''}${Math.abs(balance)}
        </Typography>
    </Box>
  );
}