import React from 'react';
import './MoviesCard.css'


function MoviesCard({ card, title, duration, isLiked, handleLike, isSavedMovies, handleSavedMovies }) {

const [isThisCardLike, setisThisCardLike] = React.useState(isLiked);

const cardLikeButtonClassNames = ( 
  isThisCardLike ? 'movie-card__like_on movie-card__animation' : 'movie-card__like_off'
);

function handleLikeClick() {
    setisThisCardLike(!isThisCardLike);
    handleLike(card);
}

    return (
        <article className='movie-card'>
            <div className='movie-card__image-container'></div>
            <div className='movie-card__info'>
                <h2 className='movie-card__header'>{title}</h2>
                {isSavedMovies 
                    ? (<div className='movie-card__close-icon'>{handleSavedMovies}</div>
                    ) : (
                        <div className={`movie-card__like ${cardLikeButtonClassNames}`} onClick={handleLikeClick}>
                            <div className='movie-card__like-mask'></div>
                        </div>
                    )
                }
            </div>
            <p className='movie-card__duration'>{duration}</p>
        </article>
    )
}

export default MoviesCard;
