import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

const ContentPage = props => {
    const movie = useContext(MovieContext);

    const handleClick = event => {
        const selectedMovie = event.target.value
        
        movie.setMovie(selectedMovie)
    }


    return (
        <div style={ { marginLeft: '30px', marginTop: '20px', display: 'flex', flexDirection: 'column', width: '300px' }}>
            <div style={ { display: 'flex', border: '1px solid', padding: '20px' }}>
                <p style={{ margin: '0 20px 0 0' }}>Movie 1</p>
                <button value='movie1' onClick={handleClick}>Add</button>
            </div>
            <div style={ { display: 'flex', border: '1px solid', padding: '20px' }}>
                <p style={{ margin: '0 20px 0 0' }}>Movie 2</p>
                <button value='movie2' onClick={handleClick}>Add</button>
            </div>
            <div style={ { display: 'flex', border: '1px solid', padding: '20px' }}>
                <p style={{ margin: '0 20px 0 0' }}>Movie 3</p>
                <button value='movie3' onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}

export default ContentPage;