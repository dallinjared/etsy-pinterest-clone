import React, { useState, useEffect } from "react"
import { Link, useHistory } from 'react-router-dom'
import { Button, CircularProgress } from "@material-ui/core"
import { routes } from '../routes/routes'
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
import ContactsSharpIcon from '@material-ui/icons/ContactsSharp'
import InfoSharpIcon from '@material-ui/icons/InfoSharp'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp'
import { connect } from "react-redux"
import { updateUser } from '../redux/userReducer'
import userReducer from '../redux/userReducer'
import Login from './Login'
import '../styles/Header.css'
import axios from 'axios'
// import { logout } from "../../server/controllers/authController"

function Header(props) {
    const history = useHistory();

    const logout = () => {
        axios.get('/auth/logout')
            .then(history.push('/'))
            .catch(err => console.log(err))
    };


    return (


        <div className='header'>
            <div className='header__left'>
                <Button >
                    <img
                        className='header__logo'
                        src='https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png'
                        alt='Pinterest Logo'
                    />

                </Button>
                <Button onClick={() => history.push('/login')} >
                    <ContactsSharpIcon />
                </Button>
            </div>
            <div className='header__input' >
                <input placeholder='search' type='text' className='header__inputSearch' />
                <SearchSharpIcon className='header__inputButton' />

            </div>
            <div className='header__right'>
                <Button onClick={() => logout()}>
                    <ExitToAppSharpIcon />
                </Button>
            </div>

        </div>

    )
}

const mapStateToProps = (state) => { return state };
export default connect(mapStateToProps, { updateUser })(Header);
