import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

const ShopCart = props => {
    const movie = useContext(MovieContext);

    return (
        <div style={ { marginLeft: '30px', marginTop: '20px', display: 'flex', flexDirection: 'column', width: '300px', border: '1px solid', height: '300px'}}>
            <div>
                <p style={ { fontWeight:'600', textAlign: 'center' }}>Shopping Cart - Selected Movies</p>
            </div>
            <div >
                {movie.movie}
            </div>
        </div>
    )
}

export default ShopCart;