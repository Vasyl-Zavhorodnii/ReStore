import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, CardHeader } from "@mui/material";
import{Link}  from "react-router-dom";
import { Product } from "../../app/models/product";


interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    // const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345,}}>
            <CardHeader avatar={
                <Avatar sx={{bgcolor:'secondary.main' }}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
                title={product.name}
                titleTypographyProps={{
                    sx:{fontWeight:'bold', color: 'secondary.main'}
                }}
            />
            <CardActionArea>
                <CardMedia
                    //className={classes.media}
                    sx={{ height: 150, backgroundSize: 'contain', bgcolor: 'success.light' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color="secondary" variant ="h5">
                        ${(product.price/100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">
                    View
                </Button>
            </CardActions>
        </Card>
    )

}
