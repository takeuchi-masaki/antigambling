import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTheme }from '@mui/material'

export default function Hero() {
    let navigate = useNavigate();
    const routeMines = () =>{ 
        let path = `/antigambling/mines`; 
        navigate(path);
    }

    return ( useTheme().palette.mode === 'light' ?
    <Stack display="flex" component="section" justifyContent="center" alignItems="center">
    <Item>
    <Box width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx = {{p: 2}}>
    <Typography variant="h3">The Games Room</Typography>
    </Box>
    </Item>
    <Item>
    <Box width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
    <Typography variant="h5" fontWeight='fontWeightMedium' lineHeight={1.5}>You may have seen websites that try and get you to spend real money to play some minigames,
    with a chance of winning more. But can you actually win, or will you just keep on losing? 
    <br></br><br></br>
    To experience some of the shady ways online casinos try to influence you, try turning on dark mode by clicking the button in the top right!
    Do so at your own risk...
    <br></br><br></br>
    Explore our games to find out how online casinos try and trick you!
    </Typography>
    </Box>
    </Item>
    <Item>
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/antigambling/img/Bomb.png"
          alt="Mine Game"
          onClick={routeMines}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guess the mines
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
    <Item>
    <Box height={100} width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
    </Box>
    </Item>
    </Stack>
    :
    <Stack display="flex" component="section" justifyContent="center" alignItems="center">
    <Item>
    <Box width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx = {{p: 2}}>
    <Typography variant="h3">The Games Room</Typography>
    </Box>
    </Item>
    <Item>
    <Box width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
    <Typography variant="h5" fontWeight='fontWeightMedium' lineHeight={1.5}>You may have seen websites that try and get you to spend real money to play some minigames,
    with a chance of winning more. But can you actually win, or will you just keep on losing? 
    <br></br><br></br>
    To return to light mode, you may press the button on the top right again.
    <br></br><br></br>
    Feel free to try out any of our games...
    </Typography>
    </Box>
    </Item>
    <Item>
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/antigambling/img/Bomb.png"
          alt="Mine Game"
          onClick={routeMines}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guess the mines
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
    <Item>
    <Box height={100} width={700} display="flex" component="section" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
    </Box>
    </Item>
    </Stack>
  )

}