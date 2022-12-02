import React from 'react';
import Serial from '../../interfaces/Serial';
import User from '../../interfaces/User';
import '../../styles/MainPage/MainButtons.scss'
import logo from '../../imgs/logo.png'

export const MainButtons: React.FC<{
    user: User | null, setSerialsCopy: any, serials: Serial[], setActiveLoginModal: any,
    setCurrentUser: any, setSearchTerm: any
}>
    = ({ user, setSerialsCopy, serials, setActiveLoginModal, setCurrentUser, setSearchTerm }) => {

        return (user === null) ? (<div className='MainButtons'>
            <img src={logo} width='120px' height='50px' alt='logo'/>
            <div className='buttons'>
                <button onClick={() => {setSerialsCopy(serials);}}>
                    Main
                </button>
                <button onClick={() => setActiveLoginModal(true)}>
                    Login
                </button>
            </div>
        </div>) : (<div className='MainButtons'>
            <img src={logo} width='120px' height='50px' alt='logo'/>
            <div className='buttons'>
                <button onClick={() => {
                    setSerialsCopy(serials);
                }}> Main </button>
                <button onClick={() => {
                    setSerialsCopy(user.serials)
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