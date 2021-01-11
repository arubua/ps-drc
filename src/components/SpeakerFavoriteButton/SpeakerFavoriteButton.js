import React from 'react'

export const SpeakerFavoriteButton = ({isFavorite, onFavoriteToggle}) => {
    return (
        <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={onFavoriteToggle}>
        </div>
    )
}
