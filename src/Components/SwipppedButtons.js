import React from 'react'
import './SwipppedButtons.css'
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipppedButtons = () => {
    return (
        <div className='swipppedButtons'>
           <IconButton className='swipedButtons__Repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton> 
            <IconButton className='swipedButtons__left'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipedButtons__star'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipedButtons__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipedButtons__lightning'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipppedButtons
