import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
    darkMode: boolean;
    handlethemeChange: ()=>void;
}

export default function Header({darkMode, handlethemeChange}:Props) {

    return (

        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RESTORE
                </Typography>
                <Switch checked={darkMode} onChange={handlethemeChange}/>
            </Toolbar>
        </AppBar>
    )
}