import { Typography, colors } from "@mui/material";

let balance = 0;

export function updateBalance(delta: number) {
    balance += delta;
}

export default function MoneyDisplay() {
  return (
    <Typography 
        variant="h5"
        sx={{
            color: (balance < 0 ? 'red' : colors.lightGreen[600]),
        }}>
        Balance: ${balance}
    </Typography>
  );
}