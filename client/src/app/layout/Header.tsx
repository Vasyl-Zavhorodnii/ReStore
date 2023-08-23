import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]
interface Props {
    darkMode: boolean;
    handlethemeChange: () => void;
}

export default function Header({ darkMode, handlethemeChange }: Props) {

    return (

        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>
                    RESTORE
                </Typography>
                <Switch checked={darkMode} onChange={handlethemeChange} />
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color:'inherit',typography:'h6'}}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}