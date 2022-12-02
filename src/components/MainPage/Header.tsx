import React from 'react';
import Serial from '../../interfaces/Serial';
import User from '../../interfaces/User';

import '../../styles/MainPage/Header.scss'
import logo from '../../imgs/logo.png'
import '../../styles/MainPage/MainButtons.scss'

export const Header: React.FC<{
    user: User | null, setSerialsCopy: any, serials: Serial[], setActiveLoginModal: any,
    setCurrentUser: any, setActiveMainButton: any, setActiveBookMarksButton: any
}>
    = ({ user, setSerialsCopy, serials, setActiveLoginModal, setCurrentUser, setActiveMainButton, setActiveBookMarksButton }) => {
        return (user === null) ? (<div className='MainButtons'>
            <img src={logo} width='120px' height='50px' alt='logo' />
            <div className='buttons'>
                <button onClick={() => {
                    setSerialsCopy(serials);
                    setActiveMainButton(true)
                    setActiveBookMarksButton(false)
                }
                }>Main</button>
                <button onClick={() => setActiveLoginModal(true)}>
                    Login
                </button>
            </div>
        </div>) : (<div className='MainButtons'>
            <img src={logo} width='120px' height='50px' alt='logo' />
            <div className='buttons'>
                <button onClick={() => {
                    setSerialsCopy(serials);
                    setActiveMainButton(true)
                    setActiveBookMarksButton(false)
                }}> Main </button>
                <button onClick={() => {
                    setSerialsCopy(user.serials)
                    setActiveMainButton(false)
                    setActiveBookMarksButton(true)
                }
                }>
                    Bookmarks
                </button>
                <button onClick={() => {
                    setCurrentUser(null)
                    setSerialsCopy(serials)
                }
                }>
                    Logout
                </button>
            </div>
        </div>)
    }