import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles';

// const products = [
//     { "id": 1, "name": "Shoes", "description": "Running Shoes.", 'price':'$5' ,'image':'https://www.hushpuppies.com/on/demandware.static/-/Sites-hushpuppies_us-Library/default/dw6e1d4ef9/content/seasonal-content/homepage/2021/03/images/mens-sneakers-d.jpg'},
//     { "id": 2, "name": "MacBook", "description": "Apple MacBook.", 'price':'$10','image':'https://media.istockphoto.com/photos/macbook-pro-with-blank-screen-and-computer-clipping-path-picture-id484965494?k=6&m=484965494&s=612x612&w=0&h=46YZSqZVJRHs3bS8-DND1MiRyq-LHixCA25bgj5zmRc='},
// ]

const Products = ( {products, onAddToCart}) =>  {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing ={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart ={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;