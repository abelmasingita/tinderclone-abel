import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
              <PersonIcon  fontSize='large' className='header__icon'/>
            </IconButton>
            <img 
                className='header__logo'
                src='https://i.pinimg.com/originals/09/f2/5b/09f25b8b685c3fd8916e06ca136b5d86.jpg'
                alt='nothing here'
            />
            <IconButton >
              <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header
