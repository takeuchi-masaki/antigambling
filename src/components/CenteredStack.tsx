import { Stack } from "@mui/material";

interface CenteredStackProps {
    height: number;
    width: number;
    children: React.ReactNode;
}
export default function CenteredStack({height, width, children}: CenteredStackProps) {
    return <Stack
            height={height}
            width={width}
            display={'flex'}
            sx={{
                bgcolor: 'primary.light',
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
            }}
            alignItems="center"
            justifyContent="center"
            spacing={5}
        >
            {children}
    </Stack>
}