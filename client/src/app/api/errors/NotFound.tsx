import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
export default function NotFound() {
    const { state } = useLocation();
    return (

        <Container component={Paper} sx={{height:400}}>

            <Typography gutterBottom variant='h3' color='secondary'>oops we couls noe find what are you looking for
            </Typography>
            <Divider />
            <Button fullWidth component={Link} to='/catalog'> Go back to the shop</Button>
        
        </Container>
    )
}