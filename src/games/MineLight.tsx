import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

function randomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export default function MineSimple() {
    // let arr: number[] = new Array(10).fill(0);
    // for (let i = 0; i < 500; i++) {
    //     arr[randomInt(9)]++;
    // }
    // for (let i = 0; i < 10; i++) {
    //     console.log(i, arr[i]);
    // }
    const sz = 550
    return <Stack direction={'row'} alignItems={'center'} padding={5} spacing={7}>
        <Box
            height={sz}
            width={sz}
            display={'flex'}
            sx={{
                bgcolor: 'primary.light',
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
            }}
            alignItems="center"
            justifyContent="center"
        >
            <Button variant="contained" color='secondary'>button</Button>
        </Box>
        <Box
            height={sz}
            width={sz}
            sx={{
                bgcolor: 'primary.light',
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
            }}
        >
        </Box>
    </Stack>
}