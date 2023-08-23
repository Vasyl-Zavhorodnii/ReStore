<<<<<<< HEAD
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
=======
import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
<<<<<<< HEAD
    { title: 'contact', path: '/contact' },
=======
    { title: 'contact', path: '/contact' }
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]
<<<<<<< HEAD

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': { color: 'grey.500' },
    '&.active': { color: 'text.secondary' }
}
=======
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
interface Props {
    darkMode: boolean;
    handlethemeChange: () => void;
}

export default function Header({ darkMode, handlethemeChange }: Props) {

    return (

        <AppBar position='static' sx={{ mb: 4 }}>
<<<<<<< HEAD
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems= 'center' >
                <Typography variant='h6' component={NavLink}
                    to='/'

                    sx={navStyles} >
                    RESTORE
                </Typography>
                <Switch checked={darkMode} onChange={handlethemeChange} />
            </Box>


            <List sx={{ display: 'flex' }}>
                {midLinks.map(({ title, path }) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}>
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            <Box display='flex' alignItems= 'center'>
                <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }} >
                    <Badge badgeContent='7' color='secondary'>
                        <ShoppingCart></ShoppingCart>
                    </Badge>
                </IconButton>

                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
=======
            <Toolbar>
                <Typography variant='h6'>
                    RESTORE
                </Typography>
                <Switch checked={darkMode} onChange={handlethemeChange} />
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
<<<<<<< HEAD
                            sx={navStyles}>
=======
                            sx={{color:'inherit',typography:'h6'}}>
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
<<<<<<< HEAD
            </Box>

        </Toolbar>
        </AppBar >
=======
            </Toolbar>
        </AppBar>
>>>>>>> 26a1e2e9372cc120d8fc462f3c2addf11372d7f7
    )
}